import "./TeamSection.css";
import TeamCard from "./TeamCard";
import { teamMembers } from "./teamData";

export default function TeamSection() {
  return (
    <section className="team-section">

      <div className="team-header">

        <h2 className="team-title">
          Our Team
        </h2>

        <p className="team-subtitle">
          Meet the experts driving engineering excellence
          across consultancy, design and project delivery.
        </p>

      </div>

     <div className="team-slider">

        <div className="team-grid">

          {teamMembers.map((member) => (
            <TeamCard
              key={member.id}
              name={member.name}
              designation={member.designation}
              image={member.image}
              bio={member.bio}
            />
          ))}

        </div>

      </div>

    </section>
  );
}