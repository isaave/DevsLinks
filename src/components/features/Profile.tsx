import type { FC } from "react";

type ProfileProps = {
  avatar: string;
  name: string;
  bio?: string;
};

// Exibe o avatar, o nome e a bio do usuário.
export const Profile: FC<ProfileProps> = ({ avatar, name, bio }) => {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <img
        src={avatar}
        alt={`Foto de perfil de ${name}`}
        className="h-28 w-28 rounded-full border-4 border-[var(--stroke-color)] object-cover shadow-lg"
      />
      <p className="text-lg font-medium text-[var(--text-color)]">{name}</p>
      {bio && (
        <p className="max-w-xs text-sm text-[var(--text-color)] opacity-80">
          {bio}
        </p>
      )}
    </div>
  );
};
