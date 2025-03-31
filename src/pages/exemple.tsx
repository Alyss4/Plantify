import React, { useState } from 'react';
import PlantifyForm from '../components/Plantify/Form';


const PageExemple = () => {
    const [formData, setFormData] = useState({
        nom: '',
        email: '',
        message: '',
        pays: '',
        accepter: false,
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevData) => ({
          ...prevData,
          accepter: e.target.checked,
        }));
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Formulaire soumis:', formData);
      };
    
      return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded-md shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Exemple de Formulaire</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <PlantifyForm.InputText
                placeholder="Votre Nom"
                value={formData.nom}
                onChange={handleChange}
                name="nom"
              />
            </div>
    
            <div className="mb-4">
              <PlantifyForm.InputText
                placeholder="Votre Email"
                value={formData.email}
                onChange={handleChange}
                name="email"
                type="email"
              />
            </div>
    
            <div className="mb-4">
              <PlantifyForm.TextArea
                placeholder="Votre Message"
                value={formData.message}
                onChange={handleChange}
                name="message"
              />
            </div>
    
            <div className="mb-4">
              <PlantifyForm.Select
                options={['France', 'Belgique', 'Suisse', 'Canada']}
                value={formData.pays}
                onChange={handleChange}
                name="pays"
              />
            </div>
    
            <div className="mb-4 flex items-center">
              <PlantifyForm.Checkbox
                label="J'accepte les termes et conditions"
                checked={formData.accepter}
                onChange={handleCheckboxChange}
                name="accepter"
              />
            </div>
    
            <div className="mb-4">
              <PlantifyForm.Button text="Envoyer" variant="primary" />
            </div>
          </form>
        </div>
      );
};

export default PageExemple;
