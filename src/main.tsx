import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';

const queryClient = new QueryClient();
const rootElement = document.getElementById('root');

if (rootElement) {
	createRoot(rootElement).render(
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	);
}
