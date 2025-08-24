'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

interface TourDate {
  date: string;
  city: string;
  location: string;
  context?: string;
  fb?: string;
}

interface TourData {
  tourDates: TourDate[];
}

export default function Concerts() {
  const [tourData, setTourData] = useState<TourData | null>(null);
  const [showPastShows, setShowPastShows] = useState(false);

  useEffect(() => {
    fetch('/data/tourDates.json')
      .then(response => response.json())
      .then(data => setTourData(data))
      .catch(error => console.error('Error loading tour dates:', error));
  }, []);

  if (!tourData) {
    return (
      <div className="mb-16 bg-white text-black p-6 border-4 border-black shadow-brutal">
        <h3 className="text-2xl font-black mb-4">LOADING SHOWS...</h3>
      </div>
    );
  }

  const now = new Date();
  const sortedDates = tourData.tourDates
    .map(show => ({
      ...show,
      parsedDate: new Date(show.date)
    }))
    .sort((a, b) => a.parsedDate.getTime() - b.parsedDate.getTime());

  const upcomingShows = sortedDates.filter(show => show.parsedDate >= now);
  const pastShows = sortedDates.filter(show => show.parsedDate < now).reverse();

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit'
    });
  };

  const ShowRow = ({ show }: { show: TourDate & { parsedDate: Date } }) => (
    <tr className="border-b-2 border-black">
      <td className="py-3 px-4 font-black text-left">
        {formatDate(show.date)}
      </td>
      <td className="py-3 px-4 font-bold text-left">
        {show.city}
      </td>
      <td className="py-3 px-4 font-medium text-left">
        {show.location}
      </td>
      <td className="py-3 px-4 text-sm text-left">
        {show.context || '-'}
      </td>

    </tr>
  );

  return (
    <div className="mb-16">
      {/* Upcoming Shows */}
      {upcomingShows.length > 0 && (
        <div className="mb-8 bg-white text-black border-4 border-black shadow-brutal">
          <div className="p-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-black mb-6">KOMMENDE SHOWS</h3>
              <a href="mailto:knarreausberlin@gmail.com?subject=Knarre buchen!" className="text-xl font-bold text-teal-400 hover:text-black transition-colors">BUCHT UNS!</a>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-4 border-black">
                    <th className="py-3 px-4 text-left font-black text-sm">DATUM</th>
                    <th className="py-3 px-4 text-left font-black text-sm">STADT</th>
                    <th className="py-3 px-4 text-left font-black text-sm">VENUE</th>
                    <th className="py-3 px-4 text-left font-black text-sm"></th>
                  </tr>
                </thead>
                <tbody>
                  {upcomingShows.map((show, index) => (
                    <ShowRow key={index} show={show} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Past Shows - Expandable */}
      {pastShows.length > 0 && (
        <div className="bg-gray-800 text-white border-4 border-white shadow-brutal-white">
          <button
            onClick={() => setShowPastShows(!showPastShows)}
            className="w-full p-6 text-left hover:bg-gray-700 transition-colors flex justify-between items-center"
          >
            <h3 className="text-2xl font-black text-teal-400">
              VERGANGENE SHOWS
            </h3>
            {showPastShows ? (
              <ChevronUp className="w-8 h-8 text-teal-400" />
            ) : (
              <ChevronDown className="w-8 h-8 text-teal-400" />
            )}
          </button>

          {showPastShows && (
            <div className="px-6 pb-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-4 border-white">
                      <th className="py-3 px-4 text-left font-black text-sm text-teal-400">DATUM</th>
                      <th className="py-3 px-4 text-left font-black text-sm text-teal-400">STADT</th>
                      <th className="py-3 px-4 text-left font-black text-sm text-teal-400">VENUE</th>
                      <th className="py-3 px-4 text-left font-black text-sm text-teal-400"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {pastShows.map((show, index) => (
                      <tr key={index} className="border-b border-gray-600">
                        <td className="py-2 px-4 font-black text-left text-sm">
                          {formatDate(show.date)}
                        </td>
                        <td className="py-2 px-4 font-bold text-left text-sm">
                          {show.city}
                        </td>
                        <td className="py-2 px-4 font-medium text-left text-sm">
                          {show.location}
                        </td>
                        <td className="py-2 px-4 text-xs text-left text-gray-300">
                          {show.context || '-'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}