import { useState } from "react";

export default function Workouts() {
  const [selectedCategory, setSelectedCategory] = useState("Yoga");
  const [selectedLevel, setSelectedLevel] = useState("Beginner");

  // ---- DATA STRUCTURE ----
  const workoutPrograms = {
    Yoga: {
      Beginner: [
        {
          id: 1,
          title: "Day 1 - Gentle Stretching & Breathing",
          videoUrl: "https://www.youtube.com/embed/v7AYKMP6rOE",
          description: "A calm yoga routine for complete beginners.",
        },
        {
          id: 2,
          title: "Day 2 - Basic Sun Salutations",
          videoUrl: "https://www.youtube.com/embed/0XBcrZ6kKNE",
          description: "Learn simple flow movements for flexibility.",
        },
        {
          id: 3,
          title: "Day 3 - Relaxation and Posture",
          videoUrl: "https://www.youtube.com/embed/VaoV1PrYft4",
          description: "Focus on breathing, posture, and calmness.",
        },
        {
          id: 4,
          title: "Day 4 - Strength and Flexibility",
          videoUrl: "https://www.youtube.com/embed/9JeSB2jkKjI?si=PmfPfa1IMpznjMtX",
          description: "Focus on building strength while maintaining flexibility.",
        },
        {
          id: 5,
          title: "Day 5 - Mindful Meditation",
          videoUrl: "hhttps://www.youtube.com/embed/AqrkL7jHLOo?si=2QuBes9sVqvtqSk3",
          description: "Focus on breathing, posture, and calmness.",
        },
        {
          id: 6,
          title: "Day 6 - Core Strength and Stability",
          videoUrl: "https://www.youtube.com/embed/iHrubSLWEjA?si=FzFBoQJLu8UzPBKp",
          description: "Focus on building core strength and stability.",
        },
        {
          id: 7,
          title: "Day 7 - Active Recovery",
          videoUrl: "https://www.youtube.com/embed/T6arj25p2ys?si=V2t3Mrc1OSXb9syX",
          description: "Gentle movements to aid recovery.",
        },
        {
          id: 8,
          title: "Day 8 - Mindfulness and Relaxation",
          videoUrl: "https://www.youtube.com/embed/FSDvlCYUDi0?si=E0JUb9jifBoRh7wt",
          description: "Focus on breathing, posture, and calmness.",
        },
      ],
      Intermediate: [
        {
          id: 1,
          title: "Day 1 - Balance & Core",
          videoUrl: "https://www.youtube.com/embed/q5nyrD4eM64",
          description: "Improve balance and strengthen your core.",
        },
        {
          id: 2,
          title: "Day 2 - Strength Flow",
          videoUrl: "https://www.youtube.com/embed/j7rKKpwdXNE",
          description: "Enhance flexibility and muscle tone.",
        },
        {
          id: 3,
          title: "Day 3 - Flow and Flexibility",
          videoUrl: "https://www.youtube.com/embed/0sYAWZXL268?si=K6WRvDeJnoG_H2pN",
          description: "A dynamic flow to boost flexibility.",
        },
        {
          id: 4,
          title: "Day 4 - Core Strength",
          videoUrl: "https://www.youtube.com/embed/_OYvmYJZE_0?si=czwZ4sO4TFjzjRxZ",
          description: "Improve core strength and stability.",
        },
        {
          id: 5,
          title: "Day 5 - Hip Openers",
          videoUrl: "https://www.youtube.com/embed/_LvGTQ3Aq-g?si=qCcnvQwX5nUzxCzb",
          description: "Open up the hips and improve flexibility. ",
        },
        {
          id: 6,
          title: "Day 6 - Arm Balances",
          videoUrl: "https://www.youtube.com/embed/_OYvmYJZE_0?si=r_Qnhupukyohg6bH",
          description: "Build upper body strength with arm balances.",
        },
        {
          id: 2,
          title: "Day 7 - Vinyasa Flow",
          videoUrl: "https://www.youtube.com/embed/K0H7gLahXEs?si=eY8I0BT6HNn9S71B",
          description: "A flowing sequence to enhance endurance.",
        },
        {
          id: 2,
          title: "Day 8 - Backbends & Heart Openers",
          videoUrl: "https://www.youtube.com/embed/EuAwhogdukQ?si=xuXm3cpqB3i392NR",
          description: "Strengthen your back and open your heart.",
        },
      ],
      Pro: [
        {
          id: 1,
          title: "Day 1 - Advanced Power Yoga",
          videoUrl: "https://www.youtube.com/embed/oBu-pQG6sTY",
          description: "A challenging yoga session for pros.",
        },
        {
          id: 2,
          title: "Day 2 - Inversions & Flow Mastery",
          videoUrl: "https://www.youtube.com/embed/dlk2X4aKDEI",
          description: "Practice advanced poses and transitions.",
        },
        {
          id: 3,
          title: "Day 3 - Strength & Flexibility",
          videoUrl: "https://www.youtube.com/embed/dlk2X4aKDEI",
          description: "Improve strength while maintaining flexibility.",
        },
        {
          id: 4,
          title: "Day 4 - Arm Balances & Core",
          videoUrl: "https://www.youtube.com/embed/dlk2X4aKDEI",
          description: "Master arm balances and core strength.",
        },
        {
          id: 5,
          title: "Day 5 - Dynamic Vinyasa Flow",
          videoUrl: "https://www.youtube.com/embed/dlk2X4aKDEI",
          description: "A fast-paced flow to boost endurance.",
        },
        {
          id: 6,
          title: "Day 6 - Deep Backbends",
          videoUrl: "https://www.youtube.com/embed/dlk2X4aKDEI",
          description: "Enhance spinal flexibility and strength.",
        },
        {
          id: 7,
          title: "Day 7 - Advanced Balance & Focus",
          videoUrl: "https://www.youtube.com/embed/dlk2X4aKDEI",
          description: "Challenge your balance and concentration skills.",
        },
        {
          id: 8,
          title: "Day 8 - Challenging Flow Sequence",
          videoUrl: "https://www.youtube.com/embed/dlk2X4aKDEI",
          description: "A complex flow to test your yoga mastery.",
        },
      ],
    },

    Calisthenics: {
      Beginner: [
        {
          id: 1,
          title: "Day 1 - Push-Up Basics",
          videoUrl: "https://www.youtube.com/embed/wKMy9FEpOhw?si=TvfJi1uKzuW-Ya2G",
          description: "Learn push-up form and control.",
        },
        {
          id: 2,
          title: "Day 2 - Core Strength",
          videoUrl: "https://www.youtube.com/embed/TVEtwrMyccc?si=cr_JA4Wr74-cRSuk",
          description: "Build core endurance and strength.",
        },
        {
          id: 3,
          title: "Day 3 - Leg Day Fundamentals",
          videoUrl: "https://www.youtube.com/embed/cx4oKIL-Nv8?si=VzyvV_qKre0DJ7ck",
          description: "Build leg strength and stability.",
        },
        {
          id: 4,
          title: "Day 4 - Arm Day Basics",
          videoUrl: "https://www.youtube.com/embed/CdUVpTqlEBw?si=3yku_JTNxtkV0tpK",
          description: "Build arm strength and stability.",
        },
        {
          id: 5,
          title: "Day 5 - Full Body Routine",
          videoUrl: "https://www.youtube.com/embed/qTsKwpnQYPc?si=2uUAGamzTTQbqmR_",
          description: "Combine basic calisthenic movements.",
        },
        {
          id: 6,
          title: "Day 6 - Plank and Core",
          videoUrl: "https://www.youtube.com/embed/OY2E1a2Ko8c?si=Ix1CXW5LJ29ADvCX",
          description: "Enhance core stability with plank variations.",
        },
      ],
      Intermediate: [
        {
          id: 1,
          title: "Day 1 - Beginner Pull-Up Progression",
          videoUrl: "https://www.youtube.com/embed/ay15dc2cvm0?si=K6mROxLbpnvCACIf",
          description: "Improve pulling strength and grip.",
        },
        {
          id: 2,
          title: "Day 2 - Pull Up & Dips",
          videoUrl: "https://www.youtube.com/embed/OJY95FBh1yA?si=s-7C9uGQKz9iEKge",
          description: "Build upper body strength with pull-ups and dips.",
        },
        {
          id: 3,
          title: "Day 3 - Advanced Pull-Up Techniques",
          videoUrl: "https://www.youtube.com/embed/VO71xpqNFJo?si=nldEjRx7vjxnNExq",
          description: "Build upper body strength with pull-ups and dips.",
        },
        {
          id: 4,
          title: "Day 4 - Plank Variations",
          videoUrl: "https://www.youtube.com/embed/DjEN3SKl0Eg?si=H0L7xo9FDldmBYDH",
          description: "Build core strength with various plank exercises.",
        },
        {
          id: 5,
          title: "Day 5 - Pull Up & Dips",
          videoUrl: "https://www.youtube.com/embed/OJY95FBh1yA?si=s-7C9uGQKz9iEKge",
          description: "Build upper body strength with pull-ups and dips.",
        },
        {
          id: 6,
          title: "Day 6 - Full Body Calisthenics",
          videoUrl: "https://www.youtube.com/embed/mUYJqe_sJFE?si=m_f3u53vDN0aqd71",
          description: "Combine intermediate calisthenic movements.",
        },
      ],
      Pro: [
        {
          id: 1,
          title: "Day 1 - Planche & Handstand Practice",
          videoUrl: "https://www.youtube.com/embed/n9-8hEEfWm4?si=MdjbmgTB8KcFVskE",
          description: "Master advanced calisthenic skills.",
        },
        {
          id: 2,
          title: "Day 2 - Pull-Up Variations",
          videoUrl: "https://www.youtube.com/embed/IaFGcUQ77hg?si=MBSacXwRueTrQCrU",
          description: "Explore different pull-up techniques.",
        },
        {
          id: 3,
          title: "Day 3 - Muscle-Up Mastery",
          videoUrl: "https://www.youtube.com/embed/aoNtepBbbic?si=cgWwZ8KbFJv1kaVR",
          description: "Advanced explosive upper-body drills.",
        },
        {
          id: 4,
          title: "Day 4 - Handstand Push-Ups",
          videoUrl: "https://www.youtube.com/embed/40rf5wyFK9Q?si=7MAaPZcoGkcXI1xg",
          description: "Improve shoulder strength and balance.",
        },{
          id: 5,
          title: "Day 5 - Explosive Power Training",
          videoUrl: "https://www.youtube.com/embed/yDJPoQ8tbHY?si=PlqdHVG1HXr_qbVx",
          description: "Progressive explosive upper-body drills.",
        },{
          id: 6,
          title: "Day 6 - Advanced Muscle-Ups",
          videoUrl: "https://www.youtube.com/embed/Vj4VNpA_kjw?si=wrU5W1WIYySSpe8q",
          description: "Master advanced calisthenic skills.",
        },
      ],
    },

    Workout: {
      Beginner: [
        {
          id: 1,
          title: "Day 1 - Beginner Full Body Warm-Up",
          videoUrl: "https://www.youtube.com/embed/Sou12pLJFCc?si=vCzQ8QxD5qFdJ8U0",
          description: "A gentle full-body warm-up routine for beginners.",
        },
        {
          id: 2,
          title: "Day 2 - Beginner Cardio Blast",
          videoUrl: "https://www.youtube.com/embed/PfAAU3hVu5U?si=pEsnzNnFQ40DFSbh",
          description: "Low-impact cardio exercises to get your heart rate up.",
        },
                {
          id: 3,
          title: "Day 3 - Chest and Back Basics",
          videoUrl: "https://www.youtube.com/embed/G-Z9BXM9Gy0?si=fcBVNBK9GpfiIOWi",
          description: "Chest and back workout for beginners.",
        },
                {
          id: 4,
          title: "Day 4 - Back and Biceps Intro",
          videoUrl: "https://www.youtube.com/embed/byo9adVQ0Ps?si=MovNU1OwAmloyJIG",
          description: "Back and biceps workout for beginners.",
        },
                {
          id: 5,
          title: "Day 5 - Biceps and Triceps Starter",
          videoUrl: "https://www.youtube.com/embed/-SwqeFpf26Y?si=JCgWLPv_spMoTUAj",
          description: "Biceps and triceps workout for beginners.",
        },
                {
          id: 6,
          title: "Day 6 - Complete Beginner Full Body",
          videoUrl: "https://www.youtube.com/embed/G-Z9BXM9Gy0?si=StZfG6-IwRZNVq5a",
          description: "Full body workout for beginners.",
        },
      ],
      Intermediate: [
        {
          id: 1,
          title: "Day 1 - Full chest and cardio workout",
          videoUrl: "https://www.youtube.com/embed/BwPH7crc_CM?si=beO2oZQLQbP1cyJv",
          description: "Increase upper body strength and endurance.",
        },
        {
          id: 2,
          title: "Day 2 - Full back and cardio workout",
          videoUrl: "https://www.youtube.com/embed/UOlFR8iqIfU?si=cK0bvRKgsgbScf9d",
          description: "Boost back strength and cardiovascular fitness.",
        },
        {
          id: 3,
          title: "Day 3 - Shoulder and cardio blast",
          videoUrl: "https://www.youtube.com/embed/YNV62_VhDCc?si=ZWGqVMOhv3tOuLYe",
          description: "Boost shoulder strength and cardiovascular fitness.",
        },{
          id: 4,
          title: "Day 4 - Complete triceps workout",
          videoUrl: "https://www.youtube.com/embed/pUlDXrbpDZg?si=jvzx_dC7czGUjeMv",
          description: "Intense triceps exercises for muscle growth.",
        },
        {
          id: 5,
          title: "Day 5 - Leg day full workout",
          videoUrl: "https://www.youtube.com/embed/jMQapAAzL2A?si=Wi4cVTVUU4J5y_d-",
          description: "Boost leg strength and endurance.",
        },
        {
          id: 6,
          title: "Day 6 - Complete V-Body Strength",
          videoUrl: "https://www.youtube.com/embed/AItLYb6KAEM?si=AJywTbvQJl7mIlgn",
          description: "Full body workout to sculpt a V-shaped physique.",
        },
      ],
      Pro: [
        {
          id: 1,
          title: "Day 1 - Complete chest day workout",
          videoUrl: "https://www.youtube.com/embed/bv8IWnczPQA?si=Ghoq1kX0ilcoWRdP",
          description: "High-intensity chest exercises for maximum growth.",
        },
        {
          id: 2,
          title: "Day 2 - Intense back workout",
          videoUrl: "https://www.youtube.com/embed/pUlDXrbpDZg?si=lfd-Jx02qLtKCuQ8",
          description: "Challenging back exercises for strength and size.",
        },
        {
          id: 3,
          title: "Day 3 - Shoulder and cardio blast",
          videoUrl: "https://www.youtube.com/embed/acUiwCplNDI?si=LWRXE_mxNuXdnPrc",
          description: "Boost shoulder strength and cardiovascular fitness.",
        },
        {
          id: 4,
          title: "Day 4 - Leg day intense workout",
          videoUrl: "https://www.youtube.com/embed/jMQapAAzL2A?si=pAx8xyH0F0gX8h98",
          description: "High-intensity leg exercises for power and endurance.",
        },
        {
          id: 5,
          title: "Day 5 - Massive shoulder pump",
          videoUrl: "https://www.youtube.com/embed/oenQAYejrCw?si=6BIed0BgEfjLs0_w",
          description: "Intense shoulder exercises for muscle growth.",
        },
        {
          id: 2,
          title: "Day 6 - Pro chest day workout",
          videoUrl: "https://www.youtube.com/embed/bv8IWnczPQA?si=Rw_jKQ-dm6JvUaVB",
          description: "High-intensity chest exercises for maximum growth.",
        },
      ],
    },
  };

  const categories = Object.keys(workoutPrograms);
  const levels = ["Beginner", "Intermediate", "Pro"];
  const selectedVideos = workoutPrograms[selectedCategory][selectedLevel];

  return (
    <>
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      {/* Page Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-green-700 mb-2">
          Guided Workout Sessions
        </h1>
        <p className="text-gray-600">
          Select a category and difficulty level to get started.
        </p>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setSelectedLevel("Beginner");
            }}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
              selectedCategory === cat
                ? "bg-green-600 text-white"
                : "bg-white text-green-700 border border-green-500 hover:bg-green-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Level Buttons */}
      <div className="flex justify-center gap-4 mb-10">
        {levels.map((lvl) => (
          <button
            key={lvl}
            onClick={() => setSelectedLevel(lvl)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
              selectedLevel === lvl
                ? "bg-green-500 text-white"
                : "bg-white text-green-700 border border-green-400 hover:bg-green-100"
            }`}
          >
            {lvl}
          </button>
        ))}
      </div>

      {/* Video List */}
      <div className="max-w-5xl mx-auto space-y-8">
        {selectedVideos.map((vid) => (
          <div
            key={vid.id}
            className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.01]"
          >
            <div className="aspect-video">
              <iframe
                src={vid.videoUrl}
                title={vid.title}
                frameBorder="0"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-5">
              <h2 className="text-xl font-semibold text-green-700">
                {vid.title}
              </h2>
              <p className="text-gray-600 text-sm mt-2">{vid.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}


