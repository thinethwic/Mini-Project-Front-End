function TeamMemebrs() {
  const people = [
    {
      name: "Thineth Wickramarchchi",
      role: "Developer",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Kawithma Thushal Ransitha",
      role: "Developer",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Chanuka Heshan",
      role: "Developer",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Siluni Gunathilaka",
      role: "Developer",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know the talented developers who bring your ideas to life
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {people.map((person, index) => (
            <div
              key={person.name}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center hover:-translate-y-2 border border-gray-100"
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <img
                  alt={`${person.name} - ${person.role}`}
                  src={person.imageUrl}
                  className="w-24 h-24 rounded-full mx-auto shadow-md group-hover:shadow-lg transition-shadow duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Name and Role */}
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                  {person.name}
                </h3>
                <p className="text-sm font-medium text-indigo-600 uppercase tracking-wide">
                  {person.role}
                </p>
              </div>

              {/* Decorative Element */}
              <div className="mt-6 w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition-colors duration-300 cursor-pointer">
            <span>Want to join our team?</span>
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamMemebrs;
