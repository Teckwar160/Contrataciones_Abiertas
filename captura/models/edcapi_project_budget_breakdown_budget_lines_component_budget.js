'use strict';
module.exports = (sequelize, DataTypes) => {
  const edcapi_project_budget_breakdown_budget_lines_component_budget = sequelize.define('edcapi_project_budget_breakdown_budget_lines_component_budget', {
    edcapiProjectBudgetBreakdownBudgetLinesComponentId: DataTypes.INTEGER,
    edcapiProjectBudgetBreakdownBudgetLineId: DataTypes.INTEGER
  }, {});
  edcapi_project_budget_breakdown_budget_lines_component_budget.associate = function(models) {
    // associations can be defined here
  };
  return edcapi_project_budget_breakdown_budget_lines_component_budget;
};