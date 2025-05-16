import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../ui/Card';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { ChatMessage } from '../../types';
import { Send, Loader2, Upload, File, X } from 'lucide-react';

interface ChatInterfaceProps {
  title?: string;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({ title = 'AI Learning Assistant' }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      content: "Hi there! I'm your AI learning assistant. How can I help you today?",
      sender: 'ai',
      timestamp: new Date().toISOString()
    }
  ]);
  const [input, setInput] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(prev => [...prev, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'text/plain': ['.txt'],
      'image/*': ['.png', '.jpg', '.jpeg']
    }
  });

  const removeFile = (fileToRemove: File) => {
    setFiles(files.filter(file => file !== fileToRemove));
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if ((!input.trim() && files.length === 0) || isProcessing) return;
    
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: input || (files.length > 0 ? `Uploaded ${files.length} file(s)` : ''),
      sender: 'user',
      timestamp: new Date().toISOString()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsProcessing(true);
    
    // In a real app, this would upload files and process them
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    let aiResponse = '';
    
    if (files.length > 0) {
      aiResponse = `I've analyzed your uploaded files. Here's what I found:\n\n`;
      files.forEach(file => {
        aiResponse += `- ${file.name}: The content appears to be well-structured. I can help you understand specific concepts or answer any questions you have about the material.\n`;
      });
      aiResponse += `\nWhat specific aspects would you like me to explain or analyze?`;
      setFiles([]);
      setShowUpload(false);
    } else if (input.toLowerCase().includes('help')) {
      aiResponse = "I'd be happy to help! Could you please provide more details about what you're struggling with?";
    } else if (input.toLowerCase().includes('explain')) {
      aiResponse = "I'll explain that concept. Let's break it down step by step so it's easier to understand.";
    } else if (input.toLowerCase().includes('example')) {
      aiResponse = "Here's an example to illustrate the concept: Consider a scenario where you're analyzing the causes of climate change. You would start by identifying key factors such as greenhouse gas emissions, deforestation, and industrial activities...";
    } else {
      aiResponse = "That's an interesting point! Would you like me to help you explore this topic further, or perhaps provide some resources for additional reading?";
    }
    
    const aiMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      content: aiResponse,
      sender: 'ai',
      timestamp: new Date().toISOString()
    };
    
    setMessages(prev => [...prev, aiMessage]);
    setIsProcessing(false);
  };

  return (
    <Card className="h-[600px] flex flex-col">
      <CardHeader className="border-b px-6">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg px-4 py-2 ${
                message.sender === 'user'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              <p className="text-sm whitespace-pre-wrap">{message.content}</p>
              <p className="text-xs mt-1 opacity-70">
                {new Date(message.timestamp).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </CardContent>
      <CardFooter className="border-t p-4">
        {showUpload && (
          <div className="w-full mb-4">
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors ${
                isDragActive ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 hover:border-indigo-400'
              }`}
            >
              <input {...getInputProps()} />
              <Upload className="mx-auto h-8 w-8 text-gray-400" />
              <p className="mt-1 text-sm text-gray-600">
                Drag & drop files here, or click to select
              </p>
            </div>

            {files.length > 0 && (
              <ul className="mt-3 space-y-2">
                {files.map((file, index) => (
                  <li 
                    key={index}
                    className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center space-x-2">
                      <File className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-700">{file.name}</span>
                      <span className="text-xs text-gray-500">
                        ({(file.size / 1024).toFixed(1)} KB)
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(file)}
                      className="text-gray-500 hover:text-red-500"
                    >
                      <X size={16} />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
        <form onSubmit={handleSendMessage} className="w-full flex space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
            disabled={isProcessing}
          />
          <Button
            type="button"
            variant="secondary"
            onClick={() => setShowUpload(!showUpload)}
            className="px-3"
          >
            <Upload size={18} />
          </Button>
          <Button 
            type="submit" 
            disabled={(!input.trim() && files.length === 0) || isProcessing}
            variant={(!input.trim() && files.length === 0) || isProcessing ? 'secondary' : 'default'}
          >
            {isProcessing ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Send size={18} />
            )}
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
};