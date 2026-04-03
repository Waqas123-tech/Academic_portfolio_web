import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookOpen, Calendar, ChevronRight, CheckCircle2, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const publications = [
  {
    title: 'SPARK-ED – Student Performance Analytics and Research with AI and ML in Education',
    journal: 'Journal of Artificial Intelligence in Education',
    year: '2025',
    status: 'under-review',
    abstract: 'Artificial intelligence (AI) and machine learning (ML) are transforming education by powering systems that evaluate and predict student performance. By efficiently analyzing academic data, these systems enable personalized learning and timely feedback for educators and students. However, the landscape of algorithms, educational data-mining techniques, and implementation challenges remains diffuse. This study conducts a systematic literature review (2019–2024) of research indexed in IEEE Xplore, ScienceDirect, Springer, and the ACM Digital Library, spanning journals, conferences, and books. An initial pool of 1,075 records, identified using search strings derived from predefined research questions, was screened to a final set of 73 relevant studies. We provide a structured synthesis linking AI/ML model choices, data-mining pipelines, and evaluation practices to reported outcomes, and we surface recurring challenges such as data quality, bias, generalizability, and interpretability. The findings clarify how AI/ML models can be used effectively to predict and improve student performance and inform the design of optimized frameworks and intelligent educational tools. Looking ahead, the review outlines a research agenda toward more generalizable, fair, and explainable models to strengthen educational decision-making and address current limitations.',
  },
  {
    title: 'DevOps, Agile, and Lean: A Systematic Literature Review of Integration Strategies',
    journal: 'Software: Practice and Experience',
    year: '2025',
    status: 'under-review',
    abstract: 'Development Operations (DevOps) seek to reduce the system development lifecycle and ensure continuous delivery while maintaining high software quality. It prioritises communication, collaboration, and integration between the software development (Dev) and IT operations (Ops) teams. In the contemporary, rapidly evolving software industry, DevOps has become indispensable for modern development and deployment processes because of its attributes such as accelerated time-to-market, improved collaboration, enhanced quality, and increased reliability. This Systematic Literature Review (SLR) analysed articles published between 2019 and 2025 using prominent databases, including IEEE, ACM, Springer, and ScienceDirect. Initially, the study identified 90,744 titles based on the search strings derived from the proposed research questions, which were subsequently refined. Finally, 50 studies were selected for inclusion in this review. The SLR synthesises relevant information to address predefined research questions. It categorises DevOps integration practices with Agile and Lean methodologies by industry sector, identifies the critical skills required for continuous delivery, and compiles key factors that facilitate and hinder DevOps adoption in virtual and globally distributed teams. Additionally, it highlights research gaps and proposes a conceptual framework to enhance DevOp adoption. The objective of these findings was to assist software professionals in improving collaboration, acquiring new skills, and standardising methodologies. This review aims to facilitate the adoption of more context-aware DevOps practices in modern software engineering environments by addressing real-world challenges such as time zone differences and coordination in virtual spaces.',
  },
  {
    title: 'Mapping the Landscape of ASD-AI: Multimodal Gains, XAI Adoption, and Fairness Gaps',
    journal: 'Artificial Intelligence Review',
    year: '2026',
    status: 'under-review',
    abstract: 'Artificial intelligence (AI) is increasingly used to automate the detection of autism spectrum disorder (ASD), yet most research still focuses on maximizing classification accuracy. This narrow emphasis leaves a critical gap in the systematic synthesis of model explainability and algorithmic fairness, both essential for clinical adoption. Following PRISMA guidelines, this systematic review examines AI-based ASD detection from three perspectives: (i) the use of explainability techniques, (ii) performance gains from multimodal fusion, and (iii) equity across demographic subgroups. A comprehensive search of major databases (including PubMed, IEEE Xplore, and the ACM Digital Library) yielded 10,117 records; after screening, 45 primary studies met the inclusion criteria. Three findings emerge: (1) when data are reasonably harmonized, multimodal fusion (e.g., combining neuroimaging with phenotypic data) delivers accuracy gains of roughly 10–25% over unimodal approaches, but multi-site heterogeneity often diminishes these benefits; (2) Explainable AI (XAI) appears in 71.1% of studies, yet methods such as SHAP and Integrated Gradients are largely used to validate group-level biomarkers rather than to provide actionable, patient level explanations required for clinical decision-making; and (3) despite growing awareness of algorithmic bias, only 40% of studies conduct formal fairness audits, leaving underrepresented groups, especially women and racially diverse populations, at continued risk of healthcare disparities. Overall, despite accuracy improvements, integration of explainability and fairness remains nascent. We synthesize these insights into a framework that advocates a shift toward human-centered AI, jointly addressing accuracy, explainability, and fairness to enable clinically trustworthy and equitable translation.',
    links: [
      { label: 'Research Square', url: 'https://www.researchsquare.com/article/rs-9083363/v1' },
      { label: 'Europe PMC', url: 'https://europepmc.org/article/PPR/PPR1168513' }
    ]
  },
  {
    title: 'Optimizing Multivariate Pre-Processing of Near Infra-Red (NIR) Spectra for PLS Prediction',
    journal: 'Discover Applied Science',
    year: '2024',
    status: 'published',
    abstract: 'Near Infrarerd (NIR) spectroscopy performs vital work in quality assessments for pharmaceuticals and food industries. Predictive model accuracy receives substantial increases through enhanced methods of pre-processing complex NIR data. The researchers optimize Partial Least Squares models through techniques like normalization, baseline correction, and wavelength selection to develop data quality and to reduce noise levels, and also improve performance. This research conducts a systematic literature review (2019-2024) to identify research gaps and thematic connections, by analyzing publication from science direct, F1000 Research, Willey online library, Springer, MDPI, Blue Eyes Intelligence Engineering and sciences, Research square, Taylor and Francis online, Intech Open, Spectroscopy Europe, IOP Publishing, Dergipark(EJOSAT), scientific research publishing, Maxapress, and IJPR digital libraries. The initial search resulted in scientists screening 21,850 papers before reaching 47 papers that met the selection criteria. The evaluation of former research uses structured research questions to help practitioners and researchers create optimal methodologies that connect pre-processing methods with Partial Least Squares (PLS) models, demonstrating potential effectiveness for improving model accuracy and better data quality across various applications. The review discusses existing analytical problems to discover meaningful solutions for these issues. Research findings will guide professionals as well as scientists to develop new innovations that enhance PLS model data quality, together with predictive performance through optimized solutions. The Standardized NIR analysis methods will receive research attention to fill gaps while providing predictive effectiveness in combination with adaptable use in diverse applications.',
    links: [
      { label: 'Springer Journal', url: 'https://link.springer.com/article/10.1007/s42452-026-08608-y' }
    ]
  },
  {
    title: 'From Learning to Action: Harnessing AI, ML, and DL for Next-Generation Robotics',
    journal: 'Robotics and Autonomous Systems',
    year: '2025',
    status: 'under-review',
    abstract: 'By enabling adaptive perception, intelligent planning, and autonomous operation in complex environments, the integration of artificial intelligence (AI), specifically machine learning (ML) and deep learning (DL), is radically changing robotics. This review goes beyond descriptive summaries by providing a critical synthesis of AI-enabled robotics, emphasizing important performance indicators, tradeoffs, and ethical considerations. In order to compare AI-driven methods with traditional rule-based systems, we present a unified evaluation framework that thoroughly evaluates accuracy, safety, efficiency, and operational impact. Particularly, our analysis tackles enduring challenges to practical implementation, such as computational bottlenecks, generalization gaps, biases in reinforcement learning, and dataset limitations. Next, we explore how new paradigms like AI agents, integrative generative AI, large language models (LLMs), and large visual models (LVMs) can improve reasoning, reduce human intervention, and speed up sim-to-real transfer. At the same time, we face the significant governance and ethical issues that come up in delicate areas like transportation, defense, and surveillance. Lastly, based on hybrid architectures that integrate safety-aware reinforcement learning, federated learning with verified control, and explainable AI (XAI), we offer a roadmap for dependable, scalable, and human-aligned robotic systems. The goal of this work is to give scholars and professionals organized insights for creating strong, accountable, and potent robotic intelligence.',
  },
  {
    title: 'Risk-Aware Triage for Autism Spectrum Disorder using Ensemble Learning',
    journal: 'IEEE Access',
    year: '2026',
    status: 'under-review',
    abstract: 'The potential for early autism spectrum disorder (ASD) diagnosis using multi-site resting-state fMRI is promising for developmental intervention; however, cross-scanner variability remains a significant barrier to clinical translation. Rather than moving beyond diagnostic framing, as in much prior work, we propose a carefully tuned ensemble approach designed not for diagnosis, but for risk-stratify targeting individuals for evaluation by qualified clinicians. Tested across all 20 ABIDE sites (n = 1,035 subjects) using the most extensive Leave-One-Site-Out (LOSO) evaluation to date, our hybrid ensemble comprising RBF SVM, linear SVM, and Elastic Net logistic regression, each calibrated via Platt scaling or isotonic regression achieves 65.3% accuracy (AUROC=0.70), establishing a new benchmark for full cross-site generalization under idealized retrospective conditions. This quantifies the fundamental domain shift caused by uncorrected site heterogeneity (scanner field strength, motion parameters, and demographic biases) and shows a notable decline of 24.9 percentage points in comparison to stratified 10-fold cross-validation (90.2%) and 8.0 percentage points in comparison to group K-fold validation (82.3%). However, transparent and risk-informed triage is made possible by our well-calibrated probability estimates: for P ≥ 0.3, sensitivity rises to 92% (false omission rate = 8%), supporting high-sensitivity screening during critical neuroplasticity windows; for P ≥ 0.7, specificity improves to 85% for high-confidence referral. For all 20 sites, feature attribution consistently emphasizes frontoparietal networks, default mode, and salience, demonstrating the existence of a neuro biological signal resistant to scanner effects. We specifically position this system as a risk-stratification tool meant to supplement rather than replace expert clinical judgment informed by ADOS/ADIR, given its 34.7% misclassification rate under realistic cross-site conditions. We promote responsible AI development in neurodevelopmental practice by prioritizing missed cases during screening while preventing autonomous diagnosis by converting fragile classifiers into trustworthy triage indicators where predicted risk is closely aligned with empirical prevalence.',
  },
  {
    title: 'Scaffold-Aware Machine Learning Docking Pipeline for TYK2 Inhibitor Discovery',
    journal: 'Journal of Chemical Information and Modeling',
    year: '2025',
    status: 'published',
    abstract: 'The FDA\'s Deucravacitinib inhibitor is a well-established drug development target for tyrosine kinase II from an immunological perspective. However, noisy bioactivity data, scaffold bias, and high experimental cost are still the major obstacles to finding novel TYK2 modulators. Herein, we propose a scaffold-aware machine learning framework that integrates robust data curation, fingerprint- based feature engineering, and calibrated classification models with downstream molecular docking validation. Standardized TYK2 bioactivity data (pIC50) were encoded using ECFP4, MACCS, and physicochemical descriptors, followed by variance and correlation-based pruning. Three classifiers, namely Support Vector Machine, Random Forest, and XGBoost, were benchmarked under scaffold-split cross-validation to ensure realistic generalization. Our proposed XGBoost classifier yielded a superior performance compared to the RF and SVM baselines, with ACC = 0.875, F1 = 0.913, and AUC = 0.951. On application to >10,000 compounds, the model prioritized 32 candidates as highly probable actives. Docking confirmed the stable binding of several novel scaffolds. Most importantly, Deucravacitinib had been correctly predicted as an active and ranked consistently, providing external robustness. This work provides a reproducible, high-performing AI-driven pipeline for kinase inhibitor repurposing. By coupling state-of-the-art classification with physics-based docking, we provide a validated computational funnel that accelerates TYK2 drug discovery',
  },
  {
    title: 'Reproducible Machine Learning QSAR Pipeline for JAK2 Inhibitors',
    journal: 'Molecular Informatics',
    year: '2026',
    status: 'published',
    abstract: 'Janus kinase 2 (JAK2) is a known therapeutic target and is essential to the signaling pathways that underlie rheumatoid arthritis. Even though there are many JAK2 inhibitors known to exist, systematic and repeatable computational pipelines that can reliably and transparently prioritize bioactive molecules are desperately needed. By combining cheminformatics filtering, molecular representations, feature selection, and robust modeling, we created a repeatable machine learning framework for predicting JAK2 inhibitory activity. 13,487 compounds from the ChEMBL dataset were selected, standardized to IC50 values, and then converted to pIC50. 5,280 distinct compounds were kept after drug-likeness filtering (Lipinski, QED). RDKit descriptors (195 features) and molecular fingerprints (ECFP4, 1024 bits) were produced; recursive feature elimination reduced the number of descriptors to 50. Nestled 5×5 cross-validation was used to train four regressors: Random Forest, Support Vector Regression (SVR), K-Nearest Neighbors, and Gradient Boosting scrambling was used to verify the robustness of the model. With RMSE = 0.66, MAE = 0.44, R2 = 0.71, and Pearson correlation = 0.85, SVR performed best, indicating strong predictive power. The QSAR predictions were further confirmed by docking 50 prioritized compounds against the JAK2 binding site, using Baricitinib as a reference drug; the top-scoring ligands displayed important interactions with catalytic residues and favorable binding affinities comparable to Baricitinib. The pipeline was fully implemented in Google Colab with environment tracking and data provenance to guarantee reproducibility. Feature importance analysis revealed that lipophilicity, hydrogen bond donors/acceptors, and molecular weight were important determinants of JAK2 activity. For JAK2 inhibitors, we provide a straightforward, repeatable QSAR-docking pipeline that balances methodological rigor and accessibility. The framework can be adapted to target various therapeutic targets and can serve as a template for robust machine learning in cheminformatics and drug repurposing.',
  },
  {
    title: 'Spatial-Aware Deep Learning for Fair Pediatric Seizure Prediction',
    journal: 'Neurocomputing',
    year: '2026',
    status: 'ongoing',
    abstract: 'An ongoing project developing spatial-aware deep learning architectures to improve fairness and accuracy in pediatric seizure prediction across different developmental stages.',
  },
];

const statusConfig = {
  'published': { icon: CheckCircle2, label: 'Published', color: '#10B981', bgColor: '#10B98115' },
  'under-review': { icon: Clock, label: 'Under Review', color: '#F59E0B', bgColor: '#F59E0B15' },
  'ongoing': { icon: Clock, label: 'Ongoing', color: '#00F0FF', bgColor: '#00F0FF15' },
};

const Publications = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = listRef.current?.querySelectorAll('.pub-item');
      if (items) {
        gsap.fromTo(
          items,
          { x: -60, opacity: 0, skewY: 3 },
          {
            x: 0,
            opacity: 1,
            skewY: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: listRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="publications"
      ref={sectionRef}
      className="relative py-24 md:py-32 px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-cyan text-sm tracking-[0.2em] uppercase mb-4 block">
            Academic Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-starlight mb-6">
            Publications
          </h2>
          <p className="text-distant max-w-2xl text-lg">
            A collection of my research contributions in artificial intelligence, 
            machine learning, and their applications in healthcare and other domains.
          </p>
        </div>

        {/* Publications List */}
        <div ref={listRef} className="space-y-4">
          {publications.map((pub, index) => {
            const status = statusConfig[pub.status as keyof typeof statusConfig];
            const StatusIcon = status.icon;
            
            return (
              <div
                key={index}
                className="pub-item group"
              >
                <div
                  className={`glass rounded-2xl overflow-hidden transition-all duration-500 ${
                    expandedIndex === index ? 'border-cyan/30' : 'border-space-lighter/30'
                  }`}
                >
                  {/* Main Content */}
                  <button
                    onClick={() => toggleExpand(index)}
                    className="w-full p-6 md:p-8 text-left flex items-start gap-4 md:gap-6"
                  >
                    {/* Index Number */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-space-lighter/50 flex items-center justify-center text-cyan font-display text-sm">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span
                          className="text-xs px-2 py-1 rounded flex items-center gap-1"
                          style={{ color: status.color, backgroundColor: status.bgColor }}
                        >
                          <StatusIcon className="w-3 h-3" />
                          {status.label}
                        </span>
                        <span className="text-xs text-distant flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {pub.year}
                        </span>
                      </div>
                      
                      <h3 className="font-display text-lg md:text-xl text-starlight group-hover:text-cyan transition-colors mb-2">
                        {pub.title}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-sm text-distant">
                        <BookOpen className="w-4 h-4" />
                        {pub.journal}
                      </div>
                    </div>

                    {/* Expand Icon */}
                    <div className={`flex-shrink-0 transition-transform duration-300 ${expandedIndex === index ? 'rotate-90' : ''}`}>
                      <ChevronRight className="w-6 h-6 text-distant group-hover:text-cyan transition-colors" />
                    </div>
                  </button>

                  {/* Expanded Content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      expandedIndex === index ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                      <div className="pl-14 md:pl-16 border-l-2 border-cyan/20">
                        <p className="text-distant leading-relaxed mb-4">
                          {pub.abstract}
                        </p>
                        {pub.links && pub.links.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-cyan/10">
                            <p className="text-sm text-cyan mb-2">Available on:</p>
                            <div className="flex flex-wrap gap-2">
                              {pub.links.map((link: any, linkIndex: number) => (
                                <a
                                  key={linkIndex}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan/10 hover:bg-cyan/20 text-cyan rounded text-xs transition-colors"
                                >
                                  {link.label}
                                  <ChevronRight className="w-3 h-3" />
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Publications;
