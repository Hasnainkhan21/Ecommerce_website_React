import React from "react";

// Rename the array to avoid naming conflict
const categoriesData = [
    {
        title: "Man",
        imageUrl: "https://shorturl.at/fi1B3",
    },
    {
        title: "Women",
        imageUrl: "https://shorturl.at/n1fhk",
    },
    {
        title: "Kids",
        imageUrl: "https://shorturl.at/jdhbH",
    }
];

export default function Categories() {
    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:grid-cols-1 cursor-pointer">
            {categoriesData.map((category, index) => (
                <div key={index} className="relative h-64 transform transition-transform duration-300 hover:scale-105 rounded-lg shadow-md">
                    <img 
                        src={category.imageUrl} 
                        alt={category.title}  // Add meaningful alt text
                        className="w-full h-full object-cover rounded-lg shadow-md" 
                    />
                    <div className="absolute top-20 left-12">
                        <p className="text-3xl font-bold">{category.title}</p>
                        <p className="text-gray-600">View All</p>
                    </div>
                </div>
            ))}
        </div>
    );
}