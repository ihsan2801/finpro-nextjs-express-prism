export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1: About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p className="text-sm">
              We provide a seamless platform for discovering and managing events. Join us to explore events near you.
            </p>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0H1.325C.594 0 0 .593 0 1.326v21.348C0 23.406.594 24 1.325 24h11.495V14.708h-3.13v-3.622h3.13V8.413c0-3.1 1.892-4.788 4.656-4.788 1.325 0 2.465.099 2.796.144v3.24h-1.918c-1.505 0-1.796.715-1.796 1.763v2.311h3.59l-.467 3.622h-3.123V24h6.117c.73 0 1.325-.594 1.325-1.326V1.326C24 .593 23.406 0 22.675 0z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557a9.83 9.83 0 0 1-2.827.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.196 4.92 4.92 0 0 0-8.384 4.482A13.95 13.95 0 0 1 1.671 3.149a4.917 4.917 0 0 0 1.523 6.573 4.903 4.903 0 0 1-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.102c-.397 0-.788-.023-1.175-.068a13.94 13.94 0 0 0 7.548 2.213c9.057 0 14.007-7.514 14.007-14.007 0-.213-.005-.426-.015-.637A10.012 10.012 0 0 0 24 4.557z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.307.975.975 1.245 2.243 1.307 3.608.058 1.265.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.307 3.608-.975.975-2.243 1.245-3.608 1.307-1.265.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.307-.975-.975-1.245-2.243-1.307-3.608-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.307-3.608.975-.975 2.243-1.245 3.608-1.307C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.749.128 4.654.394 3.69 1.358 2.725 2.323 2.459 3.418 2.401 4.722.012 8.741 0 8.332 0 12c0 3.259.012 3.668.07 4.948.058 1.303.324 2.398 1.289 3.362.964.964 2.059 1.23 3.362 1.288C8.741 23.988 8.332 24 12 24s3.668-.012 4.948-.07c1.303-.058 2.398-.324 3.362-1.289.964-.964 1.23-2.059 1.288-3.362C23.988 15.259 24 14.85 24 12c0-3.259-.012-3.668-.07-4.948-.058-1.303-.324-2.398-1.289-3.362-.964-.964-2.059-1.23-3.362-1.288C15.259.012 14.85 0 12 0zm0 5.838a6.163 6.163 0 1 0 0 12.326 6.163 6.163 0 0 0 0-12.326zM12 4.667a7.333 7.333 0 1 1 0 14.666 7.333 7.333 0 0 1 0-14.666zM18.406 5.594a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm">
          © {new Date().getFullYear()} Event Management Platform. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
