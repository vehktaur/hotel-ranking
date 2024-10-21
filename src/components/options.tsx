import {
  EllipsisHorizontalIcon,
  PencilSquareIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';

import { RefObject, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useGlobalState } from '../hooks/hooks';

// Component for hotel management options (edit/delete)
const Options = ({ id }: { id: string }) => {
  //Define state variables
  const [isOpen, setIsOpen] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const dropdownRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null); // References for detecting clicks outside the dropdown

  //Hook to Manipulate Hotels Data
  const { dispatch } = useGlobalState();
  const navigate = useNavigate();

  // Toggle dropdown visibility
  const handleClick = (): void => {
    setIsOpen((prev) => !prev);
  };

  // Delete hotel action
  const deleteHotel = () => {
    dispatch({ type: 'deleteHotel', id });
    navigate('/');
    setShowConfirmation(false);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // Attach event listener when dropdown is open
    if (isOpen) {
      window.addEventListener('click', handleOutsideClick);
    } else {
      window.removeEventListener('click', handleOutsideClick);
    }

    // Clean up event listener when dropdown is closed
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Confirmation Modal */}
      {showConfirmation && (
        <div
          title=""
          className="bg fixed inset-0 z-50 grid place-items-center bg-[#00000046] px-5"
        >
          <div className="max-w-[25rem] rounded-3xl bg-white px-6 py-8 text-center shadow-md ring-1 ring-stone-100 ~text-sm/base">
            <p>
              Are you sure you want to{' '}
              <span className="font-medium text-red-700">delete</span> this
              hotel
            </p>
            <p className="mt-2">
              <strong className="font-medium">
                This action cannot be undone
              </strong>
            </p>

            <div className="mt-4 flex items-center justify-center gap-4">
              <button
                onClick={() => deleteHotel()}
                className="rounded-3xl border border-red-300 px-4 py-2 font-medium transition-colors duration-300 hover:bg-red-500 hover:text-white"
              >
                Yes
              </button>
              <button
                onClick={() => setShowConfirmation(false)}
                className="rounded-3xl border border-green-300 px-4 py-2 font-medium transition-colors duration-300 hover:bg-green-500 hover:text-white"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Options */}
      <div className="hidden items-center ~gap-4/8 sm:flex">
        <Link
          title="Edit"
          to={`/edit-hotel/${id}`}
          className="flex w-full items-center gap-1.5 py-2 text-left transition-transform duration-500 will-change-transform ~text-sm/base hover:scale-[103%] hover:font-medium"
        >
          <PencilSquareIcon className="w-6" /> Edit
        </Link>
        <button
          title="Delete"
          onClick={() => {
            setShowConfirmation(true);
            setIsOpen(false);
          }}
          className="flex w-full items-center gap-1.5 py-2 text-left text-red-600 transition-transform duration-500 will-change-transform ~text-sm/base hover:scale-[103%] hover:font-medium"
        >
          <TrashIcon className="w-6" /> Delete
        </button>
      </div>

      {/* Mobile Options */}
      <div className="sm:hidden">
        <button
          title="options"
          onClick={handleClick}
          className="grid place-items-center"
        >
          <EllipsisHorizontalIcon className="w-5 text-stone-950" />
        </button>
        {isOpen && (
          <div className="absolute right-0 z-[2] grid w-[7.5rem] justify-items-start divide-y rounded-lg border border-gray-200 bg-white px-3 py-1 sm:hidden">
            <Link
              title="Edit"
              to={`/edit-hotel/${id}`}
              className="flex w-full items-center gap-1.5 py-2 text-left text-sm transition-transform duration-500 will-change-transform hover:scale-[103%] hover:font-medium"
            >
              <PencilSquareIcon className="w-4" /> Edit
            </Link>
            <button
              title="Delete"
              onClick={() => {
                setShowConfirmation(true);
                setIsOpen(false);
              }}
              className="flex w-full items-center gap-1.5 py-2 text-left text-sm text-red-600 transition-transform duration-500 will-change-transform hover:scale-[103%] hover:font-medium"
            >
              <TrashIcon className="w-4" /> Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Options;
