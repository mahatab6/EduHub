import React from "react";
import Marquee from "react-fast-marquee";

const CourseMarquee = () => {
  return (
    <div>
      <div className="bg-purple-100 py-4">
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={true}
          className="text-2xl font-semibold text-purple-700"
        >
          <span className="mx-8">🚀 Programming</span>
          <span className="mx-8">📈 SEO</span>
          <span className="mx-8">💻 Digital Marketing</span>
          <span className="mx-8">⏳ Time Management</span>
          <span className="mx-8">🌐 Web Development</span>
          <span className="mx-8">🎨 Graphic Design</span>
          <span className="mx-8">📊 Data Analysis</span>
          <span className="mx-8">💡 Entrepreneurship</span>
          <span className="mx-8">🤖 AI & Machine Learning</span>
          <span className="mx-8">🗣 Communication Skills</span>
        </Marquee>
      </div>
    </div>
  );
};

export default CourseMarquee;
