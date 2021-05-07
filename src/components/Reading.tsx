import React, { MouseEvent } from "react";

const Reading = () => {
  return (
    <div className="max-h-full w-full flex flex-col space-y-6">
      <div
        className="cursor-default text-lg max-w-max pr-3"
        onClick={(e: MouseEvent) => e.stopPropagation()}
      >
        📚 Bookshelf
      </div>
      <div
        className="cursor-default mt-10 w-full flex justify-center items-center space-x-10"
        onClick={(e: MouseEvent) => e.stopPropagation()}
      >
        {readingList.map((book) => (
          <a href={book.link} rel="noopener noreferrer" target="_blank">
            <img
              className="shadow-lg transition duration-200 transform hover:scale-110 rounded-md h-56"
              src={book.image}
              alt={book.alt}
              onClick={(e: MouseEvent) => {
                e.stopPropagation();
              }}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

const readingList = [
  {
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51EpasjCaIL._SX332_BO1,204,203,200_.jpg",
    alt: "The Sweet Science by A.J. Leibling",
    link: "https://www.amazon.com/Sweet-Science-J-Liebling/dp/0374272271",
  },
  {
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51sZW87slRL._SX375_BO1,204,203,200_.jpg",
    alt: "Domain Driven Design by Eric Evans",
    link:
      "https://www.amazon.com/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215",
  },
  {
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41ifmHKa27L._SX352_BO1,204,203,200_.jpg",
    alt: "Travels with Epicurus by Daniel Klein",
    link:
      "https://www.amazon.com/Travels-Epicurus-Journey-Island-Fulfilled/dp/0143121936",
  },
];

export default Reading;
