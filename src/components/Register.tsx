import { useState } from 'react';
import Link from 'next/link';
import PlantifyForm from '@/components/Plantify/Form';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError('Veuillez remplir tous les champs');
      return;
    }
    console.log('connexion avec:', { name, email, password });
    setError(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary text-white">
      <h1 className="text-3xl font-bold">Inscription</h1>
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2">Nom</label>
          <PlantifyForm.InputText
            type="text"
            name="name"
            placeholder="Nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2">Email</label>
          <PlantifyForm.InputText
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="mb-2">Mot de passe</label>
          <PlantifyForm.InputText
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <PlantifyForm.Button text="S'inscrire" variant="primary" />
      </form>
      <Link href="/login" className="mt-4 underline">Déjà un compte ? Connectez-vous</Link>
    </div>
  );
}
