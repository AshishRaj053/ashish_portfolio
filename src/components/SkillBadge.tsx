type SkillBadgeProps = {
  skill: string;
};

function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span className="px-4 py-2 rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-300 text-sm font-medium hover:bg-blue-500/20 transition-all duration-300">
      {skill}
    </span>
  );
}

export default SkillBadge;