import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


interface ScrollButtonProps {
  direction: "left" | "right";
  onScroll: (direction: "left" | "right") => void;
}

export const ScrollButton = ({
  direction,
  onScroll,
}: ScrollButtonProps) => (
  <button
    onClick={() => onScroll(direction)}
    className={`absolute ${
      direction === "left" ? "left-4" : "right-4"
    } z-20 p-3 rounded-full bg-black/50 hover:bg-black/70 transition`}
    aria-label={`Scroll ${direction}`}
  >
    {direction === "left" ? (
      <FaChevronLeft size={22} />
    ) : (
      <FaChevronRight size={22} />
    )}
  </button>
);