import { GOALS } from "@/app/goals/goals";
import { Goal } from "@/components/Goal/Goal";

const TargetList = () => {
  return (
    <>
      <h1 className="page-header">Lista najbliższych celów</h1>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {GOALS.map((item, index) => (
          <Goal
            key={item.id}
            index={index}
            goal={item.goal}
            isEven={index % 2 === 0}
            description={item.description}
            expirationDate={item.expirationDate}
          />
        ))}
      </ul>
    </>
  );
};

export default TargetList;
