import React from 'react'
import { Calendar, Sunrise, Utensils, Music } from 'lucide-react'

const activities = [
  {
    title: "Sunrise Yoga",
    description: "Start your day with invigorating yoga sessions overlooking the valley.",
    icon: Sunrise,
    schedule: "Daily, 6:00 AM - 7:00 AM"
  },
  {
    title: "Cooking Classes",
    description: "Learn to prepare local delicacies using fresh, organic ingredients.",
    icon: Utensils,
    schedule: "Tuesdays and Thursdays, 2:00 PM - 4:00 PM"
  },
  {
    title: "Nature Walks",
    description: "Guided walks through our beautiful surroundings, learning about local flora and fauna.",
    icon: Calendar,
    schedule: "Mondays, Wednesdays, and Fridays, 10:00 AM - 12:00 PM"
  },
  {
    title: "Evening Music",
    description: "Enjoy live acoustic performances by local artists in our cozy lounge.",
    icon: Music,
    schedule: "Fridays and Saturdays, 8:00 PM - 10:00 PM"
  }
]

const Activities: React.FC = () => {
  return (
    <section id="activities" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <activity.icon className="w-8 h-8 text-blue-500 mr-3" />
                <h3 className="text-xl font-semibold">{activity.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{activity.description}</p>
              <p className="text-sm text-gray-500">
                <strong>Schedule:</strong> {activity.schedule}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Activities