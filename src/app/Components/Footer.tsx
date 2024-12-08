import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              MORENT
            </Link>
            <p className="text-gray-600 text-sm">
              Our vision is to provide convenience and help increase your sales business.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Featured
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Partnership
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Business Relation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Podcast
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Invite a friend
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Socials</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t mt-12 pt-8 text-sm text-gray-600">
          <p>©2022 MORENT. All rights reserved</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-gray-900">
              Privacy & Policy
            </Link>
            <Link href="#" className="hover:text-gray-900">
              Terms & Condition
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

