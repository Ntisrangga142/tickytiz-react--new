import React, { useState } from "react";

export default function DashboardAddMovie() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    releaseDate: "",
    hour: "",
    minute: "",
    director: "",
    cast: "",
    synopsis: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Movie Data Submitted:", formData);

    // Reset form setelah submit
    setFormData({
      name: "",
      category: "",
      releaseDate: "",
      hour: "",
      minute: "",
      director: "",
      cast: "",
      synopsis: "",
      location: "",
    });
  };

  return (
    <main className="bg-white rounded-2xl shadow-md p-6 -w-[732px]-md mx-auto">
      <h2 className="text-xl font-bold mb-4 tacking-[0.25px] text-[24px]">Add New Movie</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Upload */}
        <div>
          <label className="block text-sm mb-1">Upload Image</label>
          <button
            type="button"
            className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700"
          >
            Upload
          </button>
        </div>

        {/* Movie Name */}
        <div>
          <label className="block text-sm mb-1">Movie Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm mb-1">Category</label>
          <input
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Release Date + Duration */}
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-sm mb-1">Release date</label>
            <input
              name="releaseDate"
              value={formData.releaseDate}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Hour</label>
              <input
                name="hour"
                value={formData.hour}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Minute</label>
              <input
                name="minute"
                value={formData.minute}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Director */}
        <div>
          <label className="block text-sm mb-1">Director Name</label>
          <input
            name="director"
            value={formData.director}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Cast */}
        <div>
          <label className="block text-sm mb-1">Cast</label>
          <input
            name="cast"
            value={formData.cast}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Synopsis */}
        <div>
          <label className="block text-sm mb-1">Synopsis</label>
          <textarea
            name="synopsis"
            value={formData.synopsis}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
            rows="3"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm mb-1">Add Location</label>
          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Save button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Save Movie
        </button>
      </form>
    </main>
  );
}
