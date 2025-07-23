#!/usr/bin/env node

// Simple build script for Netlify deployment
// This only builds the frontend since Netlify uses serverless functions

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Building Zapp | solutions website for Netlify...');

try {
  // Run Vite build (frontend only)
  console.log('📦 Building frontend with Vite...');
  execSync('npx vite build', { stdio: 'inherit', cwd: process.cwd() });
  
  console.log('✅ Build completed successfully!');
  console.log('📁 Static files ready in: dist/public');
  console.log('🔧 Serverless functions ready in: netlify/functions');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}