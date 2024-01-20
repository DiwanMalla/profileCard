import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "Javascript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#E84F33",
  },
  {
    skill: "Git",
    level: "beginner",
    color: "#E84F33",
  },
];

const Skill = (props: {
  color: any;
  skill:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined;
  level: string;
}) => {
  return (
    <p style={{ background: props.color }} className="rounded p-2">
      {props.skill}
      {props.level == "advanced" && `💪`}
      {props.level == "beginner" && `🐣`}
    </p>
  );
};
const profileCard = () => {
  return (
    <div>
      <div
        id="outer"
        className="m-6 border border-solid border-black border-2 w-[350px]"
      >
        <img src="/img1.jpg"></img>
        <div id="text" className=" m-3">
          <h1
            className="bg-blue-200"
            style={{ fontSize: "22px", fontWeight: "bold" }}
          >
            Lamborghini SuperCar
          </h1>

          <p>
            Full-stack web develops and teacher at Udemy. When not coding or
            preparing a course, I like to play board games, to cook, or to just
            enjoy the portugese sun at the beach.
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Skill
                key={index}
                skill={skill.skill}
                color={skill.color}
                level={skill.level}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default profileCard;
