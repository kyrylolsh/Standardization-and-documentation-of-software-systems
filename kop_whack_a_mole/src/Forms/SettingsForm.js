import React from "react";
import "./SettingsForm.css";
import Button from "../Components/Button";
import { useForm } from "react-hook-form";
import { useSettingsStore } from "../Store/SettingsStore";

const SettingsForm = ({ onClose }) => {
  const { level, setLevel } = useSettingsStore();

  const { register, handleSubmit } = useForm({
    defaultValues: { level }
  });

  const onSubmit = (data) => {
    setLevel(data.level);
    onClose();
  };

  return (
    <div className="settings-form-overlay">
      <form className="settings-form" onSubmit={handleSubmit(onSubmit)}>
        <h3>🎮 Налаштування гри</h3>

        <label>
          <input type="radio" value="easy" {...register("level")} />
          Легкий
        </label>

        <label>
          <input type="radio" value="medium" {...register("level")} />
          Середній
        </label>

        <label>
          <input type="radio" value="hard" {...register("level")} />
          Складний
        </label>

        <div className="form-actions">
          <Button type="submit">Застосувати</Button>
          <Button type="button" onClick={onClose}>Скасувати</Button>
        </div>
      </form>
    </div>
  );
};

export default SettingsForm;
