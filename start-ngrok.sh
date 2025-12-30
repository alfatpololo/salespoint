#!/bin/bash

# Script untuk menjalankan Next.js dev server dan ngrok

# Function to cleanup on exit
cleanup() {
    echo ""
    echo "🛑 Stopping services..."
    kill $NEXT_PID 2>/dev/null
    kill $NGROK_PID 2>/dev/null
    echo "✅ Services stopped"
    exit 0
}

# Trap Ctrl+C
trap cleanup SIGINT SIGTERM

echo "🚀 Starting Next.js dev server..."
npm run dev &
NEXT_PID=$!

echo "⏳ Waiting for Next.js to start on port 3000..."
sleep 5

echo "🌐 Starting ngrok tunnel..."
ngrok http 3000 &
NGROK_PID=$!

echo ""
echo "✅ Services started!"
echo "📱 Next.js dev server: http://localhost:3000"
echo "🌍 Ngrok dashboard: http://localhost:4040"
echo ""
echo "To get your public ngrok URL, visit: http://localhost:4040"
echo "Or run: curl http://localhost:4040/api/tunnels | python3 -m json.tool"
echo ""
echo "Press Ctrl+C to stop both services"

# Wait for user interrupt
wait

