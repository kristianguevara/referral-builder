import { Sequelize, DataTypes } from "Sequelize";

const defineModels = (sequelize: Sequelize) => {
  const ResearchConfigurations = sequelize.define('research_configurations', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    company_name: DataTypes.STRING,
    company_url: DataTypes.STRING,
  });

  const ResearchConfigurationQuestions = sequelize.define('research_configuration_questions', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    research_configuration_id: DataTypes.NUMBER,
    question: DataTypes.STRING,
  });

  const ResearchConfigurationSources = sequelize.define('research_configuration_sources', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    research_configuration_id: DataTypes.NUMBER,
    source: DataTypes.STRING,
  });

  return {
    ResearchConfigurations,
    ResearchConfigurationQuestions,
    ResearchConfigurationSources
  }
};

export default defineModels;
