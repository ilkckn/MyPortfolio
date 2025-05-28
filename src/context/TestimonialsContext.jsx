import { useContext, useState, useEffect, createContext } from "react";
import razieh from "../assets/images/testimonials/Razieh.png";
import bleon from "../assets/images/testimonials/Bleon.png";
import tomislav from "../assets/images/testimonials/Tomislav.png";

export const TestimonialsContext = createContext();

function TestimonialsContextProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const testimonials = [
    {
      src: "https://media.licdn.com/dms/image/v2/D4D03AQGxBqZ3LZfcQg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1705775717124?e=1753920000&v=beta&t=zQ4ylYy0-qMWGWY2w8bf2kA0e4baAmAOlaRuFnOchaU",
      name: "Bashar Alwarad",
      designation: "WBS coding school Instructor",
      quote:
        "I had the pleasure of working with Musa during his time in the Fullstack Web Development bootcamp, and he quickly proved himself to be an exceptional student and teammate. Musa thrives under pressure, staying composed and professional even in the most demanding situations.One of Musa’s standout qualities is how quickly he learns and adapts. Whether it’s picking up a new framework or diving into a challenging problem, he’s always eager to understand and apply new concepts. His sharp learning curve, paired with a natural curiosity, makes him a valuable asset in any fast-paced environment.Musa also brings a great sense of humor to the table. His friendly and lighthearted personality creates a positive atmosphere for those around him, making collaboration enjoyable and productive. Despite the jokes, he’s deeply committed to his work and always delivers with quality and focus.Any team would benefit from having Musa on board. He’s smart, reliable, and knows how to bring both professionalism and energy to every project. I highly recommend him to any company looking for a capable and motivated developer who knows how to get things done—without forgetting to have a little fun along the way.",
    },
    {
      src: razieh,
      name: "Razieh Foroughi Abari",
      designation: "Developer-Colleague from WBS Coding School",
      quote:
        "I had the pleasure of working with Musa during our final project at the Full-Stack Bootcamp. He was one of the most responsible and committed teammates I’ve worked with, always taking initiative and putting in maximum effort to achieve the best results. What truly stood out was his exceptional programming skills, strong problem-solving abilities, and remarkable eagerness to learn and grow. He constantly explored new solutions and technologies, which had a great impact on the success of our project. I highly recommend Musa and am confident he will be a valuable addition to any development team.",
    },
    {
      src: bleon,
      name: "Bleon Arllati",
      designation: "Developer-Colleague from WBS Coding School",
      quote:
        "I had the pleasure of working with Musa during our time at WBS Coding School. Musa stood out for his strong skills in React and his ability to quickly turn ideas into functional, user-friendly components. He’s a reliable teammate, a fast learner, and always brought a positive attitude to our projects. Any team would benefit from having him on board!",
    },
    {
      src: tomislav,
      name: "Tomislav Miljac",
      designation: "Developer-Colleague from DCI coding school",
      quote:
        "I have been lucky to study web development along Musa for over a year between August 2023 and October 2024. Musa has proven as a colleague one can rely on in all moments, share ideas and problems with, and ask for advice and help. Musa was always very dilligent, detail-oriented and resourceful with finding different solutions to the problems we'd face in the course, and above that showed and displayed the most exquisite aestethic designer's taste. Musa's layouts and solutions always brought in and masterfully integrated an awe-inspiring dimension, which would be even more juxtaposed by the notion of his gentle spirit and humbleness in respect to his outstandingly successful creations. Musa holds my warmest recommendations as I believe he would be an invaluable asset to every team.  Musa is above all a kind, caring and very dedicated person, and very proficient in his field of expertise as well.",
    },
  ];
  return (
    <TestimonialsContext.Provider value={{ testimonials, loading, error }}>
      {children}
    </TestimonialsContext.Provider>
  );
}

export default TestimonialsContextProvider;
