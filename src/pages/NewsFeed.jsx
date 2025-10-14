import React from "react";

const NewsCard = ({ title, date, description, image }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8 hover:shadow-xl transition-shadow duration-300">
    <div className="overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-6">
      <div className="h-1 w-12 bg-green-500 rounded mb-3"></div> {/* subtle top border indicator */}
      <h3 className="text-2xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-500 text-sm mb-4">{date}</p>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  </div>
);

export default function Newsfeed() {
  const newsItems = [
    {
      title: "শীতবস্ত্র বিতরণ কর্মসূচি ২০২৩",
      date: "ডিসেম্বর ২৫, ২০২৩",
      description:
        "গত শীতে আমরা প্রায় ৫০০টি পরিবারের মাঝে কম্বল ও গরম কাপড় বিতরণ করেছি। আপনাদের সহযোগিতায় এই মহৎ কাজটি সফলভাবে সম্পন্ন হয়েছে।",
      image: "https://placehold.co/600x400/16a34a/FFFFFF?text=Winter+Drive",
    },
    {
      title: "বিনামূল্যে স্বাস্থ্যসেবা ক্যাম্প",
      date: "নভেম্বর ১০, ২০২৩",
      description:
        "আমাদের সংস্থার উদ্যোগে প্রায় ২০০ জন দুঃস্থ রোগীকে বিনামূল্যে চিকিৎসা ও ঔষধ প্রদান করা হয়েছে।",
      image: "https://placehold.co/600x400/3b82f6/FFFFFF?text=Health+Camp",
    },
    {
      title: "শিক্ষাবৃত্তি প্রদান অনুষ্ঠান",
      date: "অক্টোবর ১৫, ২০২৩",
      description:
        "এ বছর ২০ জন মেধাবী কিন্তু আর্থিকভাবে অসচ্ছল ছাত্র-ছাত্রীকে শিক্ষাবৃত্তি প্রদান করা হয়েছে।",
      image: "https://placehold.co/600x400/059669/FFFFFF?text=Scholarship",
    },
    {
      title: "খাদ্য বিতরণ ও দারিদ্র্য হ্রাস কার্যক্রম",
      date: "সেপ্টেম্বর ২০, ২০২৩",
      description:
        "দুঃস্থ পরিবারের মাঝে খাদ্য সামগ্রী বিতরণ করা হয়েছে। আপনার সাহায্য ও সহায়তায় আমরা আরও বেশি পরিবারকে সাহায্য করতে পারি।",
      image: "https://placehold.co/600x400/f59e0b/FFFFFF?text=Food+Distribution",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">সংস্থার সাম্প্রতিক খবর</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          আমাদের সর্বশেষ কার্যক্রম ও ইভেন্ট সম্পর্কে জানুন। আপনারা আমাদের সঙ্গে থাকলে আরও বেশি মানুষের সাহায্য করতে পারি।
        </p>
      </div>

      {/* News Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {newsItems.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
