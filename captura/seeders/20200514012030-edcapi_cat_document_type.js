'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('edcapi_cat_document_types', [
      {
        code: 'needsAssessment',
        title: 'Documento de necesidades',
        description: 'Documentación sobre la evaluación de necesidades realizada para el procedimiento de contratación o proyecto de infraestructura, que especifique la demanda del proyecto o la inversión en las comunidades o usuarios afectados.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'valueForMoneyAnalysis',
        title: 'Análisis de valor por dinero',
        description: 'Un resumen del análisis de la relación calidad-precio realizado para el proyecto, junto con las cifras de apoyo, los cálculos y el caso de negocio, en función de los resultados de adquisición proyectados o reales.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'technicalSpecifications',
        title: 'Especificaciones técnicas',
        description: 'Información técnica detallada sobre los bienes o servicios que se prestarán.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'serviceDescription',
        title: 'Descripción de los servicios',
        description: 'Una descripción de alto nivel de los servicios.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'estimatedDemand',
        title: 'Demanda estimada',
        description: 'Una narración que describe la demanda estimada a ser atendida (anualmente) por el proyecto.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'contractDraft',
        title: 'Borrador de contrato',
        description: 'Un borrador o copia proforma del contrato.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'contractSigned',
        title: 'Contrato firmado',
        description: 'Una copia del contrato firmado. Considere proporcionar archivos legibles por máquina (por ejemplo, archivos originales en formato PDF, Word o documento abierto) y una entrada de documento separada para páginas firmadas escaneadas cuando sea necesario.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'feasibilityStudy',
        title: 'Estudio de factibilidad',
        description: 'Documentación de los estudios de factibilidad realizados para este procedimiento de contratación, proporcionando información sobre los beneficios o costos netos de los bienes, obras o servicios propuestos.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'environmentalImpact',
        title: 'Evaluación de Impacto Ambiental',
        description: 'Documentación de las evaluaciones de los impactos ambientales (por ejemplo, impactos sobre la flora, la fauna y los bosques, áreas de belleza natural, las emisiones de carbono, etc.) y medidas de mitigación (por ejemplo, control de la contaminación, soluciones de bajo carbono, madera sostenible, etc.) para este procedimiento de contratación o proyecto .',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'finalAudit',
        title: 'Conclusión de la auditoría',
        description: 'La documentación final de una auditoría realizada al término de la impementación del contrato.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'tenderNotice',
        title: 'Convocatoria',
        description: 'El aviso formal que da detalles de una licitación. Esto puede ser un enlace a un documento descargable, a una página web o a un boletín oficial en el que se encuentra el aviso.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'evaluationCommittee',
        title: 'Detalles del comité de evaluación',
        description: 'Información sobre la constitución del comité de evaluación.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'requestForQualification',
        title: 'Solicitud de calificación',
        description: 'El conjunto de documentos emitidos por la autoridad contratante que constituyen la base de la calificación y potencialmente la preselección de candidatos (la lista corta). Los candidatos calificados (o candidatos preseleccionados) serán invitados a presentar una propuesta (o entrar en una nueva fase antes de la presentación de ofertas, como una fase de diálogo o fase interactiva).',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'evaluationCriteria',
        title: 'Criterios de evaluación',
        description: 'Documentación sobre cómo se evaluarán las ofertas.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'minutes',
        title: 'Minutas',
        description: 'Actas de reuniones previas a la licitación, u otras reuniones relevantes.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'shortlistedFirms',
        title: 'Empresas preseleccionadas',
        description: 'Documentación que proporciona información sobre empresas preseleccionadas. Las versiones estructuradas de esta información se pueden proporcionar utilizando la extensión de ofertas.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'negotiationParameters',
        title: 'Parámetros de la negociación',
        description: 'Una descripción de los parámetros para la negociación con el candidato elegido.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'evaluationReports',
        title: 'Reporte de evaluación',
        description: 'Documentación sobre la evaluación de las ofertas y la aplicación de los criterios de evaluación, incluida la justificación de la adjudicación.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'contractGuarantees',
        title: 'Garantías',
        description: 'Documentación de las garantías relativas a un procedimiento de contratación o contrato.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'defaultEvents',
        title: 'Incumplimientos',
        description: 'Información sobre eventos de incumplimiento.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'termination',
        title: 'Certificado de terminación (informe de conclusión)',
        description: 'La información sobre la terminación del contrato.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'performanceReport',
        title: 'Informe de desempeño',
        description: 'Informes de evaluación del desempeño.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'riskProvisions',
        title: 'Provisiones para la gestión de riesgos y pasivos.',
        description: 'Documentación que cubre cómo se gestionarán los riesgos como parte de este proceso de contratación.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'projectScope',
        title: 'Alcance del proyecto',
        description: 'Una descripción de los principales resultados del proyecto que se están llevando dentro de la construcción (incluyendo el tipo, la cantidad y unidades)',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'landAndSettlementImpact',
        title: 'Evaluación de suelos y de asentamientos',
        description: 'La cantidad de tierra y propiedad que fue adquirida por el proyecto (por ejemplo, 25 km 2 de tierra), y los impactos relacionados con el esquema (por ejemplo, temas arqueológicos (trasladaron sajón lugar de enterramiento), los asentamientos locales / indígenas (reubicados 5 pueblos indígenas de 500 aldeanos cada uno), impactos en las empresas locales, por ejemplo (30 propiedades comerciales comprados)).',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'projectEvaluation',
        title: 'Evaluacion de proyecto',
        description: 'Generalmente publicado al final de un proyecto, proporcionando un resumen técnico y financiero de la entrega.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'budgetApproval',
        title: 'Aprobación del presupuesto',
        description: 'Detalles adicionales sobre de la aprobación del presupuesto.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'illustration',
        title: 'Imagen',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'compensationAndRelocationPlan',
        title: 'Plan de compensación y de reubicación',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'projectApprovalOpinion',
        title: 'Dictamen de aprobación del proyecto',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'projectPlan',
        title: 'Plan financiero',
        description: 'Documentación de la planeación de proyecto para este proceso de contratación y, donde aplique, una copia del documento del plan de proyecto',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'projectPlanUpdate',
        title: 'Actualización al plan financiero',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'executiveContractReport',
        title: 'Informe ejecutivo de la ejecución de los contratos',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'progressionReport',
        title: 'Reportes de progreso',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'socialEnvironmentalImpactAssessment',
        title: 'Evaluaciones de impacto social y ambiental',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('edcapi_cat_document_types', null, {});
  }
};
