export default function Home() {
  const startDate = new Date('2022-08-01');
  const currentDate = new Date();
  const yearsAtVercel = Math.floor((currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25));

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <main className="max-w-2xl">
        <h1 className="text-2xl font-medium mb-8 text-gray-900 dark:text-gray-100">
          Tobias Lins
        </h1>
        
        <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <div>
            <div className="mb-2">
              <span className="text-gray-900 dark:text-gray-100 font-medium">Currently</span>
            </div>
            <p>
              At{' '}
              <a 
                href="https://vercel.com" 
                className="font-medium underline decoration-gray-400 hover:decoration-gray-600 dark:decoration-gray-500 dark:hover:decoration-gray-300 transition-colors text-gray-900 dark:text-gray-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vercel
              </a> 
              {' '}for <span className="font-medium">{yearsAtVercel}+ years</span>, currently <span className="font-medium">Tech Lead</span> building <mark className="bg-blue-100 dark:bg-blue-900 dark:text-blue-100 px-1 rounded">highly scalable and efficient solutions</mark>
            </p>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
              Built the <span className="font-medium">Observability tab</span>, <span className="font-medium">Web Analytics</span>, <span className="font-medium">Speed Insights</span>, and <span className="font-medium">Logs</span> with my team
            </p>
          </div>

          <div>
            <div className="mb-2">
              <span className="text-gray-900 dark:text-gray-100 font-medium">Previously</span>
            </div>
            <p>
              Founded <a 
                href="https://splitbee.io" 
                className="font-medium underline decoration-gray-400 hover:decoration-gray-600 dark:decoration-gray-500 dark:hover:decoration-gray-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Splitbee
              </a>, an analytics platform <mark className="bg-green-100 dark:bg-green-900 dark:text-green-100 px-1 rounded">acquired by Vercel</mark>
            </p>
          </div>

          <div>
            <div className="mb-2">
              <span className="text-gray-900 dark:text-gray-100 font-medium">Focus</span>
            </div>
            <p>
              <span className="font-medium">Product engineer</span> who loves thinking about <mark className="bg-purple-100 dark:bg-purple-900 dark:text-purple-100 px-1 rounded">UX challenges</mark> and building <mark className="bg-purple-100 dark:bg-purple-900 dark:text-purple-100 px-1 rounded">end-to-end solutions</mark> that are highly scalable and solve real customer issues
            </p>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
              Building systems that handle <span className="font-medium">hundreds of terabytes</span> of data in <span className="font-medium">ClickHouse</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
