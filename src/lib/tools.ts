import { ToolMetadata } from '@/types/tool';
import fs from 'fs';
import path from 'path';

export function getToolMetadata(toolId: string): ToolMetadata | null {
  const dataDir = path.join(process.cwd(), 'data', 'dantelabs');
  const categories = fs.readdirSync(dataDir);

  for (const category of categories) {
    const categoryPath = path.join(dataDir, category);
    const sourceFile = path.join(categoryPath, '00_source.json');

    if (fs.existsSync(sourceFile)) {
      const data = JSON.parse(fs.readFileSync(sourceFile, 'utf-8'));
      if (data.toolId === toolId) {
        return data;
      }
    }
  }

  return null;
}

export function getToolDocumentation(toolId: string): string | null {
  const dataDir = path.join(process.cwd(), 'data', 'dantelabs');
  const categories = fs.readdirSync(dataDir);

  for (const category of categories) {
    const categoryPath = path.join(dataDir, category);
    const sourceFile = path.join(categoryPath, '00_source.json');
    const docsFile = path.join(categoryPath, 'docs.md');

    if (fs.existsSync(sourceFile) && fs.existsSync(docsFile)) {
      const data = JSON.parse(fs.readFileSync(sourceFile, 'utf-8'));
      if (data.toolId === toolId) {
        return fs.readFileSync(docsFile, 'utf-8');
      }
    }
  }

  return null;
}

export function getAllTools(): ToolMetadata[] {
  const dataDir = path.join(process.cwd(), 'data', 'dantelabs');
  const tools: ToolMetadata[] = [];

  if (!fs.existsSync(dataDir)) {
    return tools;
  }

  const categories = fs.readdirSync(dataDir);

  for (const category of categories) {
    const categoryPath = path.join(dataDir, category);
    const sourceFile = path.join(categoryPath, '00_source.json');

    if (fs.existsSync(sourceFile)) {
      const data = JSON.parse(fs.readFileSync(sourceFile, 'utf-8'));
      tools.push(data);
    }
  }

  return tools;
}

export function getToolsByCategory(): Record<string, ToolMetadata[]> {
  const tools = getAllTools();
  const byCategory: Record<string, ToolMetadata[]> = {};

  for (const tool of tools) {
    if (!byCategory[tool.category]) {
      byCategory[tool.category] = [];
    }
    byCategory[tool.category].push(tool);
  }

  return byCategory;
}
