'use client'

import React from 'react'
import { Github, Linkedin, Twitter, Youtube, Instagram } from "lucide-react"

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/yasir-khan-397989234/" },
  { name: "GitHub", icon: Github, url: "https://github.com/YasirKhan231" },
  { name: "Twitter", icon: Twitter, url: "https://x.com/yasir_juned" },
  { name: "YouTube", icon: Youtube, url: "https://www.youtube.com" },
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com" },
]

export default function SocialLinks() {
  const handleClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="w-full max-w-md p-6 space-y-4 text-center bg-white rounded-lg shadow-xl">
        <h1 className="text-2xl font-bold text-gray-800">My Social Links</h1>
        <div className="space-y-2">
          {socialLinks.map((link) => (
            <button
              key={link.name}
              className="w-full px-4 py-2 text-lg font-semibold text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-200 flex items-center justify-start"
              onClick={() => handleClick(link.url)}
            >
              <link.icon className="mr-2 h-5 w-5" />
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}