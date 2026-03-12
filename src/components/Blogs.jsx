import React, { useMemo, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const CATEGORIES = ["All", "Robotics", "Space Tech", "Astronomy","Programming"];

const SAMPLE_BLOGS = [
  {
    id: 1,
    title: "Building Your First Drone: A Complete Guide",
    excerpt:
      "Step-by-step tutorial on building a custom drone from scratch: component selection, assembly, and programming.",
    author: "Alex Rodriguez",
    date: "January 12, 2025",
    tags: ["Python", "OpenCV", "TensorFlow", "ROS"],
    category: "Robotics",
  },
  {
    id: 2,
    title: "CubeSat Design Fundamentals",
    excerpt:
      "A beginner-friendly walkthrough on CubeSat subsystems, power budgets, and communication strategies.",
    author: "Priya Menon",
    date: "March 04, 2025",
    tags: ["Embedded", "RF", "CAD"],
    category: "Space Tech",
  },
  {
    id: 3,
    title: "Photometry Techniques for Variable Stars",
    excerpt:
      "How to process survey images, extract light curves, and classify variability with open-source tools.",
    author: "Dr. S. Rao",
    date: "February 02, 2025",
    tags: ["AstroPy", "Python", "Statistics"],
    category: "Astronomy",
  },
  {
    id: 4,
    title: "Swarm Mapping with Multi-UAVs",
    excerpt:
      "Cooperative strategies and communication patterns that let many small drones produce high-fidelity maps.",
    author: "Meera Shah",
    date: "April 18, 2025",
    tags: ["ROS", "Algorithms", "Simulation"],
    category: "Robotics",
  },
  {
    id: 5,
    title: "Antenna Tuning for Small Satellites",
    excerpt:
      "Design trade-offs and prototyping tips for compact high-gain antennas in nanosatellite platforms.",
    author: "R. Kumar",
    date: "May 08, 2025",
    tags: ["RF", "Fabrication"],
    category: "Space Tech",
  },
  {
    id: 6,
    title: "Imaging Nebulae: From Capture to Publish",
    excerpt:
      "Capture techniques, stacking workflows, and basic post-processing for astrophotography beginners.",
    author: "Anita G",
    date: "June 10, 2025",
    tags: ["Imaging", "Processing"],
    category: "Astronomy",
  },
  {
    id: 7,
    title: "Flight Software Architecture for CubeSats",
    excerpt:
      "Designing modular, reliable software systems for small satellites using RTOS and C++.",
    author: "Rajesh K.",
    date: "July 15, 2025",
    tags: ["RTOS", "C++", "Embedded"],
    category: "Programming",
  },
  {
    id: 8,
    title: "Data Analysis Pipelines for Space Missions",
    excerpt:
      "Building scalable data processing pipelines for satellite telemetry and scientific data using Python and cloud services.",
    author: "Sneha R.",
    date: "August 22, 2025",
    tags: ["Python", "Cloud", "Data Science"],
    category: "Programming",
  },
  {
    id: 9,
    title: "Machine Learning for Space Object Classification",
    excerpt:
      "Applying machine learning techniques to classify space debris and celestial objects using telescope data.",
    author: "Dr. N. Patel",
    date: "September 30, 2025",
    tags: ["ML", "Classification", "Telescope"],
    category: "Programming",
  },
];

export default function Blogs() {
  const [selected, setSelected] = useState("All");

  const filtered = useMemo(() => {
    if (selected === "All") return SAMPLE_BLOGS;
    return SAMPLE_BLOGS.filter((b) => b.category === selected);
  }, [selected]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative pt-32 pb-28 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_65%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <p className="text-sm tracking-widest uppercase text-gray-400 mb-4">
            Knowledge Hub
          </p>

          <h1 className="font-orbitron text-4xl md:text-6xl font-extrabold">
            Latest <span className="text-indigo-400">Insights</span>
          </h1>

          <p className="font-space text-gray-300 mt-6 text-lg max-w-3xl mx-auto">
            Dive deep into technology, space exploration, robotics and research
            insights written by GAAC members.
          </p>
        </div>
      </section>

      {/* ================= FILTERS ================= */}
      <section className="relative px-6 pb-20">
        <div className="max-w-6xl mx-auto flex justify-center gap-4 flex-wrap mb-16">
          {CATEGORIES.map((c) => {
            const active = selected === c;
            return (
              <button
                key={c}
                onClick={() => setSelected(c)}
                className={`
                  px-5 py-2 rounded-full text-sm font-medium
                  border transition
                  ${
                    active
                      ? "bg-indigo-400 text-black border-indigo-400"
                      : "border-white/20 text-gray-300 hover:border-indigo-400 hover:text-indigo-300"
                  }
                `}
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* ================= BLOG CARDS ================= */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map((post) => (
            <div
              key={post.id}
              className="
                relative rounded-3xl p-8
                border border-white/10
                bg-white/5 backdrop-blur-sm
                hover:border-indigo-400/60
                transition
              "
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.12),transparent_70%)] opacity-0 hover:opacity-100 transition" />

              <div className="relative z-10">
                <span className="text-xs uppercase tracking-wider text-indigo-300">
                  {post.category}
                </span>

                <h3 className="font-orbitron text-xl font-bold mt-3 mb-4">
                  {post.title}
                </h3>

                <p className="font-space text-gray-300 leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-md bg-black/40 border border-white/10 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Author + Button */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-indigo-300">
                      {post.author}
                    </p>
                    <p className="text-xs text-gray-400">
                      {post.date}
                    </p>
                  </div>

                  <button
                    className="
                      inline-flex items-center gap-2
                      px-4 py-2 rounded-full
                      border border-indigo-400/50
                      text-indigo-300
                      hover:bg-indigo-400 hover:text-black
                      transition
                    "
                  >
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-20 text-center text-gray-400">
            No blogs match this category.
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
