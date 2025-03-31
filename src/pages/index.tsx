import Link from 'next/link';
import PlantifyForm from '@/components/Plantify/Form';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary text-white">
      <h1 className="text-4xl font-bold">Bienvenue sur Plantify</h1>
      <p className="mt-4 text-lg">Le projet est encore en développement...</p>
      <div className="mt-6 space-x-4">
        <Link href="/login" passHref>
            <PlantifyForm.Button text="Connexion" />
        </Link>
        <Link href="/register" passHref>
            <PlantifyForm.Button text="Inscription" variant="secondary" />
        </Link>
        <Link href="/exemple" passHref>
            <PlantifyForm.Button text="Exemple Composant" variant="secondary" />
        </Link>
      </div>
    </div>
  );
}
