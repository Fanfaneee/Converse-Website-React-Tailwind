export default function TagAccueil({ children, dotColorClass = 'bg-green-200' }) {
    // Par défaut, nous utilisons 'bg-green-400' si aucune couleur n'est spécifiée.
    // Le 'dotColorClass' doit être une classe de fond Tailwind valide.

    return (
        <div className="flex items-center space-x-2">
            {/* Le point de couleur */}
            <div className={`w-4 h-4 rounded-full ${dotColorClass}`}></div>

            {/* Le texte */}
            <span className="text-gray-700 text-sm font-medium">
                {children}
            </span>
        </div>
    );
}