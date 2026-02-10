'use client';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div style={{ padding: '40px', fontFamily: 'monospace', background: '#111', color: '#fff', minHeight: '100vh' }}>
            <h2>Something went wrong!</h2>
            <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', color: '#ff6b6b', marginTop: '20px' }}>
                {error.message}
            </pre>
            <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', color: '#999', marginTop: '10px', fontSize: '12px' }}>
                {error.stack}
            </pre>
            <button
                onClick={() => reset()}
                style={{ marginTop: '20px', padding: '10px 20px', background: '#333', color: '#fff', border: '1px solid #555', cursor: 'pointer' }}
            >
                Try again
            </button>
        </div>
    );
}
