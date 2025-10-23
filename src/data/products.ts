export interface Product {
  id: string;
  name: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  features: string[];
  targetAudience: string;
  url: string;
  category: string;
  gradient: string;
  icon: string;
  price?: string;
  guarantee?: string;
}

export const products: Product[] = [
  {
    id: 'mitolyn',
    name: 'Mitolyn',
    tagline: 'Unlock Your Metabolic Power',
    shortDescription: 'Boost metabolism and support healthy weight management naturally',
    fullDescription: 'Mitolyn is a scientifically formulated dietary supplement designed to boost metabolism and support weight loss by increasing mitochondria levels. Based on Harvard research, this natural formula helps your body burn more calories and melt stubborn fat without stimulants.',
    benefits: [
      'Promotes natural calorie burning',
      'Supports energy production at cellular level',
      'Helps reduce stubborn body fat',
      'Improves overall metabolic health',
      'Boosts vitality and stamina'
    ],
    features: [
      'Contains 6 exotic natural ingredients including Maqui Berry, Rhodiola, and Schisandra',
      'Based on Harvard scientific research',
      'No stimulants or habit-forming ingredients',
      'Plant-based, natural formula',
      'Made in USA in FDA-approved facility'
    ],
    targetAudience: 'Adults over 35 struggling with slow metabolism and weight management',
    url: 'https://mitolyn.com/welcome/?hop=zzzzz&hopId=e0a50e40-02c0-41ff-ae6f-2d58987d6c4e',
    category: 'Weight & Metabolism',
    gradient: 'from-orange-500 to-red-500',
    icon: '🔥',
    guarantee: '90-day money-back guarantee'
  },
  {
    id: 'prostavive',
    name: 'ProstaVive',
    tagline: 'Complete Men\'s Vitality Support',
    shortDescription: 'Support prostate health, energy, and masculine wellness',
    fullDescription: 'ProstaVive is an all-natural blend of prostate-boosting nutrients designed to support healthy prostate function, improve blood circulation, and enhance overall male vitality. This comprehensive formula helps men maintain their health and vigor naturally.',
    benefits: [
      'Supports healthy prostate function',
      'Enhances blood circulation and nitric oxide levels',
      'Boosts energy and stamina',
      'Promotes better sleep quality',
      'Supports urinary health'
    ],
    features: [
      'Contains Boron, Tongkat Ali, Ashwagandha, and Fenugreek',
      'Supports healthy testosterone levels naturally',
      'Helps improve stress management',
      'Promotes cognitive function',
      'Multiple package options available'
    ],
    targetAudience: 'Men over 40 seeking to improve prostate health and overall vitality',
    url: 'https://prostavive.org/?hopId=e7d72e54-3ed7-4c36-a7ee-c3f75206ef35',
    category: 'Men\'s Health',
    gradient: 'from-slate-600 to-slate-800',
    icon: '💪',
    price: 'Starting at $39/bottle'
  },
  {
    id: 'prodentim',
    name: 'ProDentim',
    tagline: 'Advanced Oral Probiotic',
    shortDescription: 'Support healthy teeth, gums, and fresh breath naturally',
    fullDescription: 'ProDentim is a revolutionary probiotic supplement designed to support oral health by repopulating your mouth with beneficial bacteria. This unique dissolvable formula contains 3.5 billion probiotics and nutrients to promote gum and tooth health.',
    benefits: [
      'Supports gum and tooth health',
      'Balances oral microbiome',
      'Promotes fresh breath naturally',
      'Supports respiratory system',
      'Enhances overall oral wellness'
    ],
    features: [
      'Contains 3.5 billion probiotics per serving',
      'Includes Lactobacillus Paracasei, B.lactis BL-04, and Lactobacillus Reuteri',
      'Dissolvable probiotic candy format',
      'Made in FDA-approved facility',
      'Easy to use - chew one tablet every morning'
    ],
    targetAudience: 'Adults seeking natural oral health support and improved dental hygiene',
    url: 'https://prodentim101.com/text.php?hop=zzzzz&hopId=723eda4b-12c9-463a-bc3b-7e815b382a22',
    category: 'Oral Health',
    gradient: 'from-sky-400 to-blue-500',
    icon: '😁',
    guarantee: '60-day money-back guarantee'
  },
  {
    id: 'gluco6',
    name: 'Gluco6',
    tagline: 'Smart Blood Sugar Management',
    shortDescription: 'Support healthy glucose levels and balanced insulin response',
    fullDescription: 'Gluco6 is a natural dietary supplement designed to manage blood sugar levels by targeting GLUT-4 receptor function. This innovative formula helps prevent glucose spikes, balance insulin response, and potentially aid weight loss while increasing energy levels.',
    benefits: [
      'Supports healthy blood sugar levels',
      'Helps prevent dangerous glucose spikes',
      'Balances insulin response naturally',
      'May support healthy weight management',
      'Increases natural energy levels'
    ],
    features: [
      'Contains 6 natural, scientifically-backed ingredients including "Sukre"',
      'Non-GMO and plant-based formula',
      'Made in FDA-registered, GMP-certified facility',
      'Targets root cause of glucose management',
      'Includes free bonuses with multi-bottle purchases'
    ],
    targetAudience: 'Adults over 40 concerned about blood sugar management and Type-2 diabetes prevention',
    url: 'https://gluco6.com/?hop=zzzzz&hopId=9a47ca3d-f1de-4a18-b166-be48958f6574',
    category: 'Blood Sugar',
    gradient: 'from-blue-500 to-cyan-500',
    icon: '🩸',
    guarantee: '60-day money-back guarantee'
  },
  {
    id: 'brainsong',
    name: 'Brain Song',
    tagline: 'Activate Your Mental Clarity',
    shortDescription: 'Neuroscience-backed audio to enhance memory and cognitive function',
    fullDescription: 'Brain Song is a revolutionary 12-minute digital audio track designed to activate Gamma brain waves and improve memory and cognitive function. Developed by neuroscientists based on MIT research, this soundwave technology supports brain clearance and mental clarity without supplements or exercises.',
    benefits: [
      'Activates Gamma brain waves in just 12 minutes',
      'Improves memory and concentration',
      'Enhances mental clarity and focus',
      'Supports natural brain waste removal',
      'Helps recall details and learn easily'
    ],
    features: [
      'Developed by neuroscientists',
      'Based on MIT Brain Aging Initiative research',
      'Brain entrainment technology',
      'Digital audio track for home use',
      'Includes 3 free bonus gifts'
    ],
    targetAudience: 'Adults over 50 experiencing memory decline or brain fog',
    url: 'https://brainsongoriginal.com/?hopId=c012a194-a710-47c6-a2e7-a85c6dbd3b32',
    category: 'Brain Health',
    gradient: 'from-purple-500 to-pink-500',
    icon: '🧠',
    price: '$39 digital download',
    guarantee: '90-day money-back guarantee'
  },
  {
    id: 'jointgenesis',
    name: 'Joint Genesis',
    tagline: 'Restore Youthful Mobility',
    shortDescription: 'Doctor-formulated support for joint comfort and flexibility',
    fullDescription: 'Joint Genesis is a doctor-formulated supplement that targets age-related joint discomfort by rehydrating and thickening synovial fluid. Using the patented Mobilee ingredient, this formula combines four clinically-proven joint-supporting nutrients to promote youthful mobility and flexibility.',
    benefits: [
      'Rehydrates and thickens synovial fluid',
      'Promotes youthful mobility and flexibility',
      'Supports healthy inflammatory response',
      'Provides optimal joint comfort',
      'Helps maintain active lifestyle'
    ],
    features: [
      'Contains patented Mobilee that multiplies hyaluronan molecules by 10x',
      'First supplement to combine 4 clinically-proven nutrients',
      'Formulated by Dr. Mark Weis, M.D.',
      'Backed by Ivy League research',
      'Targets root cause of joint discomfort'
    ],
    targetAudience: 'Adults experiencing age-related joint pain and stiffness',
    url: 'https://bestjointcare.com/cb/',
    category: 'Joint Health',
    gradient: 'from-teal-500 to-emerald-600',
    icon: '🦴'
  },
  {
    id: 'thyrafemme',
    name: 'Thyrafemme Balance',
    tagline: 'Feminine Thyroid Harmony',
    shortDescription: 'Gentle thyroid support for women\'s energy and wellness',
    fullDescription: 'Thyrafemme Balance is a 14-in-1 gentle thyroid balance supplement designed specifically for women. This natural formula supports steady energy, balanced mood, and overall feminine wellness by providing comprehensive thyroid health support with adaptogens and essential nutrients.',
    benefits: [
      'Supports steady energy throughout the day',
      'Promotes balanced mood and emotional wellness',
      'Helps maintain healthy metabolism',
      'Supports hair, skin, and overall vitality',
      'Enhances whole feminine wellness'
    ],
    features: [
      'Contains iodine, kelp, L-Tyrosine, zinc, and selenium',
      'Includes adaptogens like Ashwagandha and Schisandra',
      'Non-GMO, vegan, and gluten-free',
      'Produced in FDA-registered facility',
      'Ancient "Moon Elixir" inspired formula'
    ],
    targetAudience: 'Women seeking natural thyroid health support and hormonal balance',
    url: 'https://getthyrafemme.com/welcome/',
    category: 'Women\'s Health',
    gradient: 'from-rose-400 to-pink-500',
    icon: '🌸',
    guarantee: '60-day money-back guarantee'
  },
  {
    id: 'quietumplus',
    name: 'Quietum Plus',
    tagline: 'Support Healthy Hearing',
    shortDescription: 'Natural support for ear health and auditory wellness',
    fullDescription: 'Quietum Plus is a natural dietary supplement formulated to support healthy hearing and ear function. This carefully crafted blend of herbs and nutrients works to promote auditory health and overall ear wellness using time-tested natural ingredients.',
    benefits: [
      'Supports healthy hearing function',
      'Promotes ear health naturally',
      'Helps maintain auditory wellness',
      'Supports overall ear comfort',
      'Made with natural ingredients'
    ],
    features: [
      'Blend of natural herbs and nutrients',
      'Carefully formulated for ear health',
      'Made in USA facility',
      'Easy-to-take capsule format',
      'Natural, non-invasive approach'
    ],
    targetAudience: 'Adults seeking natural support for ear health and hearing function',
    url: 'https://quietumplus.com/text?hop=zzzzz&hopId=705955da-25f9-44a3-a7dc-45b45d746b78',
    category: 'Hearing Health',
    gradient: 'from-amber-500 to-orange-500',
    icon: '👂'
  },
  {
    id: 'yusleep',
    name: 'Yu Sleep',
    tagline: 'Restful, Rejuvenating Sleep',
    shortDescription: 'Nano-enhanced formula for deep, restorative sleep',
    fullDescription: 'Yu Sleep is an all-natural nano-enhanced sleep formula designed to help you fall asleep faster, stay asleep through the night, and wake up feeling refreshed. This comprehensive blend supports your natural sleep rhythm with plant-based ingredients backed by neuroscience research.',
    benefits: [
      'Fall asleep faster naturally',
      'Stay asleep throughout the night',
      'Wake up feeling refreshed and energized',
      'Reduces nighttime wake-ups',
      'Supports natural sleep rhythm'
    ],
    features: [
      'Contains Red Tart Cherry Extract, 5-HTP, and L-Theanine',
      'Includes Magnesium Glycinate and GABA',
      'Low-dose melatonin (0.9mg) for gentle support',
      'Plant-based, natural ingredients',
      'Backed by neuroscience and clinical research'
    ],
    targetAudience: 'Adults over 40 struggling with sleep issues, frequent wake-ups, and morning fatigue',
    url: 'https://getyusleep.com/?hopId=8d9b0ced-b403-4124-8ac5-1eeb3225e63f',
    category: 'Sleep Support',
    gradient: 'from-indigo-500 to-purple-600',
    icon: '🌙'
  }
];
