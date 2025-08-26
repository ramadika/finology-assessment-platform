import { AlertCircle } from "lucide-react";
import type { ErrorProps } from "@/types/user.types";

export default function Index({ message }: ErrorProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full mx-4">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Error Loading Users
          </h2>
          <p className="text-gray-600 mb-4">{message}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-[#284D8E] text-white px-4 py-2 rounded-md hover:opacity-60 transition duration-300"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}
