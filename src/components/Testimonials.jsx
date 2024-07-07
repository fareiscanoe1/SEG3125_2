import { FaStar } from "react-icons/fa";
import avatar1 from "../images/person.jpeg";
import avatar2 from "../images/person1.jpeg";
import avatar3 from "../images/person2.jpeg";

const testimonialList = [
  {
    id: 1,
    name: "Mason",
    review:
      "This soup is incredibly delicious and easy to make. A new favorite!",
    avatarImg: avatar1,
  },
  {
    id: 2,
    name: "Alex",
    review: "Perfect for a quick meal. Loved the fresh basil flavor!",
    avatarImg: avatar2,
  },
  {
    id: 3,
    name: "Smith",
    review: "Simple ingredients, great taste. Highly recommend!",
    avatarImg: avatar3,
  },
];
const Testimonials = () => {
  return (
    <div className="d-flex gap-3 mt-4">
      {testimonialList.map((item) => (
        <div lg={4} key={item.id} className="p-3 box-shadow rounded">
          <div className="d-flex justify-content-end gap-1 star-color">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="mt-3 fw-bolder">"{item.review}"</p>
          <div className="d-flex align-items-center gap-3">
            <img
              src={item.avatarImg}
              alt="avatar"
              className="img-fluid rounded-circle"
              width="45"
              height="45"
            />
            <h1 className="fs-6 fw-bolder mt-1">{item.name}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
