import { GOALS } from "@/app/goals/goals";

const GoalDetails = ({ params }) => {
  const goal = GOALS[params.id];

  return (
    <section>
      <h1>Szczegóły celu</h1>
      <h2>Cel: {goal.goal}</h2>
      <p>
        Ukończyć przed: <span className="font-bold">{goal.expirationDate}</span>
      </p>
      <p className="font-bold">Szczegóły:</p>
      <p>{goal.description}</p>
    </section>
  );
};

export default GoalDetails;
