import React, { useState } from 'react';

function Publications() {
  const [expandedId, setExpandedId] = useState(null);

  const published = [
    {
      id: 'pub1',
      title: 'Optimizing NIR spectral preprocessing for PLS predictive accuracy: a systematic review (2019-2024)',
      journal: 'Journal of Discover Applied Science',
      year: 2024,
      abstract: 'Near-infrared (NIR) spectroscopy plays a critical role in quality assessments for pharmaceuticals and food industries. Predictive model accuracy is substantially improved through optimized methods of pre-processing complex NIR data. Researchers optimize Partial Least Squares models through techniques like normalization, baseline correction, and wavelength selection to enhance data quality, reduce noise levels, and improve performance. This research conducts a systematic literature review (2019-2024) to identify research gaps and thematic connections by analyzing publications from 15 major scientific databases. The initial search resulted in screening 21,850 papers before reaching 47 papers that met the selection criteria. Analysis of the 47 studies revealed that preprocessing effectiveness is highly dataset-dependent, with no single technique universally optimal across applications. The evaluation of existing research uses structured research questions to help practitioners and researchers create an optimal methodology that links pre-processing methods with Partial Least Squares (PLS) models, thereby improving model accuracy and data quality across various applications. The review identifies existing analytical problems and proposes meaningful solutions for these issues. Research findings provide guidance to professionals as well as scientists to develop new innovations that enhance PLS model data quality and predictive performance through optimized approaches. Standardized NIR analysis methods require further research attention to fill gaps while providing predictive effectiveness along with adaptable use in diverse applications.',
      link: 'https://link.springer.com/article/10.1007/s42452-026-08608-y'
    },
    {
      id: 'pub2',
      title: 'Scaffold-Aware Machine Learning–Docking Pipeline for TYK2 Inhibitor Discovery with Calibrated Prioritization of 32 Actives including Deucravacitinib',
      journal: 'Journal of Spectrum of Engineering',
      year: 2024,
      abstract: 'The FDA\'s Deucravacitinib inhibitor is a well-established drug development target for tyrosine kinase II from an immunological perspective. However, noisy bioactivity data, scaffold bias, and high experimental cost are still the major obstacles to finding novel TYK2 modulators. Herein, we propose a scaffold-aware machine learning framework that integrates robust data curation, fingerprint based feature engineering, and calibrated classification models with downstream molecular docking validation. Standardized TYK2 bioactivity data (pIC50) were encoded using ECFP4, MACCS, and physicochemical descriptors, followed by variance and correlation-based pruning. Three classifiers, namely Support Vector Machine, Random Forest, and XGBoost, were benchmarked under scaffold-split cross-validation to ensure realistic generalization. Our proposed XGBoost classifier yielded a superior performance compared to the RF and SVM baselines, with ACC = 0.875, F1 = 0.913, and AUC = 0.951. On application to >10,000 compounds, the model prioritized 32 candidates as highly probable actives. Docking confirmed the stable binding of several novel scaffolds. Most importantly, Deucravacitinib had been correctly predicted as an active and ranked consistently, providing external robustness. This work provides a reproducible, high-performing AI-driven pipeline for kinase inhibitor repurposing. By coupling state-of-the-art classification with physics-based docking, we provide a validated computational funnel that accelerates TYK2 drug discovery.'
    },
    {
      id: 'pub3',
      title: 'Reproducible Machine Learning QSAR Pipeline for JAK2 Inhibitors with Structural Docking Validation',
      journal: 'AMARR',
      year: 2024,
      abstract: 'Janus kinase 2 (JAK2) is a known therapeutic target and is essential to the signaling pathways that underlie rheumatoid arthritis. Even though there are many JAK2 inhibitors known to exist, systematic and repeatable computational pipelines that can reliably and transparently prioritize bioactive molecules are desperately needed. By combining cheminformatics filtering, molecular representations, feature selection, and robust modeling, we created a repeatable machine learning framework for predicting JAK2 inhibitory activity. 13,487 compounds from the ChEMBL dataset were selected, standardized to IC50 values, and then converted to pIC50. 5,280 distinct compounds were kept after drug-likeness filtering (Lipinski, QED). RDKit descriptors (195 features) and molecular fingerprints (ECFP4, 1024 bits) were produced; recursive feature elimination reduced the number of descriptors to 50. Nestled 5×5 cross-validation was used to train four regressors: Random Forest, Support Vector Regression (SVR), K-Nearest Neighbors, and Gradient Boosting. Y-scrambling was used to verify the robustness of the model. With RMSE = 0.66, MAE = 0.44, R2 = 0.71, and Pearson correlation = 0.85, SVR performed best, indicating strong predictive power. The QSAR predictions were further confirmed by docking 50 prioritized compounds against the JAK2 binding site, using Baricitinib as a reference drug; the top-scoring ligands displayed important interactions with catalytic residues and favorable binding affinities comparable to Baricitinib. The pipeline was fully implemented in Google Colab with environment tracking and data provenance to guarantee reproducibility. Feature importance analysis revealed that lipophilicity, hydrogen bond donors/acceptors, and molecular weight were important determinants of JAK2 activity. For JAK2 inhibitors, we provide a straightforward, repeatable QSAR-docking pipeline that balances methodological rigor and accessibility. The framework can be adapted to target various therapeutic targets and can serve as a template for robust machine learning in cheminformatics and drug repurposing. Every model, piece of code, and piece of data is openly accessible for community use.'
    }
  ];

  const underReview = [
    { id: 'ur1', title: 'Mapping the Landscape of ASD-AI: Multimodal Gains, XAI Adoption, and Fairness Gaps. A Systematic Review', journal: 'Journal of Artificial Intelligence Review', preprint: 'https://www.researchsquare.com/article/rs-9083363/v1' },
    { id: 'ur2', title: 'Few-Shot Cross-Modal Seizure Prediction in Children Using EEG and Age-Matched Structural Brain Templates', journal: 'IEEE Transactions on Medical Imaging' },
    { id: 'ur3', title: 'Bridging the Translation Gap: A Systematic Review, Retrospective Feasibility Analysis, and CLINIC-DL Framework for Deep Learning in EEG-Based Stroke Rehabilitation', journal: 'IEEE Access' },
    { id: 'ur4', title: 'Calibrated Risk Stratification for Autism Spectrum Disorder: A Site-Robust Ensemble Framework Validated Across All 20 ABIDE Sites', journal: 'Journal of Autism and Developmental Disorder' },
    { id: 'ur5', title: 'SPARK-ED – Student Performance Analytics and Research with Artificial Intelligence and Machine Learning in Education', journal: 'International Journal of Educational Technology in Higher Education' },
    { id: 'ur6', title: 'DevOps, Agile, and Lean: A Systematic Literature Review of Integration Strategies', journal: 'Journal of Systems and Software' },
    { id: 'ur7', title: 'From Learning to Action: Harnessing AI, ML, and DL for Next-Generation Robotics', journal: 'Journal of Intelligent Robotics' }
  ];

  return (
    <section id="publications" style={{ padding: '60px' }}>
      <h2>Publications</h2>

      <h3 style={{ marginTop: '30px', marginBottom: '20px', color: '#2563eb' }}>Published Articles</h3>
      {published.map((pub) => (
        <div key={pub.id} style={{ marginBottom: '15px', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '15px', background: '#f9fafb' }}>
          <button
            onClick={() => setExpandedId(expandedId === pub.id ? null : pub.id)}
            style={{
              width: '100%',
              background: 'transparent',
              border: 'none',
              textAlign: 'left',
              cursor: 'pointer',
              fontSize: '15px',
              fontWeight: 'bold',
              color: '#2563eb',
              padding: '0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start'
            }}
          >
            <span>{pub.title}</span>
            <span style={{ fontSize: '20px', marginLeft: '10px' }}>{expandedId === pub.id ? '−' : '+'}</span>
          </button>
          
          <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#666' }}><em>{pub.journal} • {pub.year}</em></p>
          
          {expandedId === pub.id && (
            <div style={{ marginTop: '15px', paddingTop: '15px', borderTop: '1px solid #e5e7eb', lineHeight: '1.7', fontSize: '14px' }}>
              <p><strong>Abstract:</strong></p>
              <p style={{ lineHeight: '1.6', color: '#333' }}>{pub.abstract}</p>
              {pub.link && (
                <a href={pub.link} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 'bold' }}>
                  View Published Paper →
                </a>
              )}
            </div>
          )}
        </div>
      ))}

      <h3 style={{ marginTop: '40px', marginBottom: '20px', color: '#2563eb' }}>Under Review</h3>
      {underReview.map((paper) => (
        <div key={paper.id} style={{ marginBottom: '12px', paddingLeft: '20px' }}>
          <p style={{ margin: '0 0 5px 0', fontSize: '15px' }}>
            <strong>{paper.title}</strong>
          </p>
          <p style={{ margin: '0', fontSize: '13px', color: '#666' }}>📝 {paper.journal}</p>
          {paper.preprint && (
            <a href={paper.preprint} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'none', fontSize: '13px' }}>
              View Preprint →
            </a>
          )}
        </div>
      ))}
    </section>
  );
}

export default Publications;