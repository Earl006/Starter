"use client";
import { useState } from "react";
import Image from "next/image";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="card p-8">
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-24 h-24 mb-4">
            <Image
              src="/placeholder-avatar.jpg"
              alt="Profile"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold">John Doe</h1>
          <p className="text-gray-600 dark:text-gray-400">john@example.com</p>
        </div>

        <div className="flex border-b dark:border-gray-700 mb-6">
          <button
            className={`px-4 py-2 ${
              activeTab === "profile" ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => setActiveTab("profile")}
          >
            Profile
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "articles" ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => setActiveTab("articles")}
          >
            My Articles
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "settings" ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => setActiveTab("settings")}
          >
            Settings
          </button>
        </div>

        {activeTab === "profile" && (
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full p-2 rounded border dark:border-gray-700 dark:bg-gray-800"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Bio</label>
              <textarea
                className="w-full p-2 rounded border dark:border-gray-700 dark:bg-gray-800"
                rows={4}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
          </form>
        )}
      </div>
    </div>
  );
}