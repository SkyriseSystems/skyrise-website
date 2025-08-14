// app/lib/payload-client.ts
export const payloadClient = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.PAYLOAD_API_TOKEN || ''}`,
  },
  async find({ collection, limit }: { collection: string; limit?: number }) {
    const apiUrl = process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3001';
    const url = `${apiUrl}/api/${collection}?limit=${limit || 10}`;
    console.log(`Fetching from: ${url}`);
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add authentication token if required
        // 'Authorization': `Bearer ${process.env.PAYLOAD_API_TOKEN || ''}`,
      },
      credentials: 'include', // Include cookies for session-based auth
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch ${collection}: ${response.statusText}`);
    }

    const data = await response.json();
    // Simplify response to avoid potential issues
    const simplifiedData = {
      docs: data.docs.map((doc: any) => ({
        id: doc.id,
        title: doc.title,
        description: doc.description,
        icon: doc.icon ? { url: doc.icon.url } : null,
      })),
    };
    console.log('Payload CMS response:', JSON.stringify(simplifiedData, null, 2));
    return simplifiedData;
  },
};