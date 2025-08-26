import { Loader2 } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="h-12 w-12 animate-spin text-[#284D8E] mx-auto mb-4" />
        <p className="text-lg text-gray-600">Loading users...</p>
      </div>
    </div>
  );
}
