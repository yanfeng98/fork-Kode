# Kode - AI Coding
<img width="991" height="479" alt="image" src="https://github.com/user-attachments/assets/c1751e92-94dc-4e4a-9558-8cd2d058c1a1" />  <br>

## 🤝 AGENTS.md Standard Support

**Kode proudly supports the [AGENTS.md standard protocol](https://agents.md) initiated by OpenAI** - a simple, open format for guiding programming agents that's used by 20k+ open source projects.

### Full Compatibility with Multiple Standards

- ✅ **AGENTS.md** - Native support for the OpenAI-initiated standard format
- ✅ **CLAUDE.md** - Full backward compatibility with Claude Code `.claude` configurations  
- ✅ **Subagent System** - Advanced agent delegation and task orchestration

Use `# Your documentation request` to generate and maintain your AGENTS.md file automatically, while preserving compatibility with existing `.claude` workflows.

## Overview

Kode is a powerful AI assistant that lives in your terminal. It can understand your codebase, edit files, run commands, and handle entire workflows for you.

> **⚠️ Security Notice**: Kode runs in YOLO mode by default (equivalent to Claude Code's `--dangerously-skip-permissions` flag), bypassing all permission checks for maximum productivity. YOLO mode is recommended only for trusted, secure environments when working on non-critical projects. If you're working with important files or using models of questionable capability, we strongly recommend using `kode --safe` to enable permission checks and manual approval for all operations.

<img width="600" height="577" alt="image" src="https://github.com/user-attachments/assets/8b46a39d-1ab6-4669-9391-14ccc6c5234c" />

## Features

### Core Capabilities
- 🦜 **Expert Model Consultation** - Use `@ask-model-name` to consult specific AI models for specialized analysis
- 👤 **Intelligent Agent System** - Use `@run-agent-name` to delegate tasks to specialized subagents

### 🎯 Advanced Intelligent Completion System

#### Smart Fuzzy Matching
- **Hyphen-Aware Matching** - Type `dao` to match `run-agent-dao-qi-harmony-designer`
- **Abbreviation Support** - `dq` matches `dao-qi`, `nde` matches `node`
- **Numeric Suffix Handling** - `py3` intelligently matches `python3`
- **Multi-Algorithm Fusion** - Combines 7+ matching algorithms for best results

#### Intelligent Context Detection
- **No @ Required** - Type `gp5` directly to match `@ask-gpt-5`
- **Auto-Prefix Addition** - Tab/Enter automatically adds `@` for agents and models
- **Mixed Completion** - Seamlessly switch between commands, files, agents, and models
- **Smart Prioritization** - Results ranked by relevance and usage frequency

#### Unix Command Optimization
- **500+ Common Commands** - Curated database of frequently used Unix/Linux commands
- **System Intersection** - Only shows commands that actually exist on your system
- **Priority Scoring** - Common commands appear first (git, npm, docker, etc.)
- **Real-time Loading** - Dynamic command discovery from system PATH

### User Experience
- 🎨 **Interactive UI** - Beautiful terminal interface with syntax highlighting
- 🔌 **Tool System** - Extensible architecture with specialized tools for different tasks
- 💾 **Context Management** - Smart context handling to maintain conversation continuity
- 📋 **AGENTS.md Integration** - Use `# documentation requests` to auto-generate and maintain project documentation

## Installation

```bash
npm install -g @shareai-lab/kode
```

After installation, you can use any of these commands:
- `kode` - Primary command
- `kwa` - Kode With Agent (alternative)
- `kd` - Ultra-short alias

## Usage

### Interactive Mode
Start an interactive session:
```bash
kode
# or
kwa
# or
kd
```

### Non-Interactive Mode
Get a quick response:
```bash
kode -p "explain this function" path/to/file.js
# or
kwa -p "explain this function" path/to/file.js
```

### Using the @ Mention System

Kode supports a powerful @ mention system for intelligent completions:

#### 🦜 Expert Model Consultation
```bash
# Consult specific AI models for expert opinions
@ask-claude-sonnet-4 How should I optimize this React component for performance?
@ask-gpt-5 What are the security implications of this authentication method?
@ask-o1-preview Analyze the complexity of this algorithm
```

#### 👤 Specialized Agent Delegation  
```bash
# Delegate tasks to specialized subagents
@run-agent-simplicity-auditor Review this code for over-engineering
@run-agent-architect Design a microservices architecture for this system
@run-agent-test-writer Create comprehensive tests for these modules
```

#### 📁 Smart File References
```bash
# Reference files and directories with auto-completion
@src/components/Button.tsx
@docs/api-reference.md
@.env.example
```

The @ mention system provides intelligent completions as you type, showing available models, agents, and files.

### AGENTS.md Documentation Mode

Use the `#` prefix to generate and maintain your AGENTS.md documentation:

```bash
# Generate setup instructions
# How do I set up the development environment?

# Create testing documentation  
# What are the testing procedures for this project?

# Document deployment process
# Explain the deployment pipeline and requirements
```

This mode automatically formats responses as structured documentation and appends them to your AGENTS.md file.

## Multi-Model Intelligent Collaboration

Unlike official Claude which supports only a single model, Kode implements **true multi-model collaboration**, allowing you to fully leverage the unique strengths of different AI models.

### 🏗️ Core Technical Architecture

#### 1. **ModelManager Multi-Model Manager**
We designed a unified `ModelManager` system that supports:
- **Model Profiles**: Each model has an independent configuration file containing API endpoints, authentication, context window size, cost parameters, etc.
- **Model Pointers**: Users can configure default models for different purposes in the `/model` command:
  - `main`: Default model for main Agent
  - `task`: Default model for SubAgent
  - `reasoning`: Reserved for future ThinkTool usage
  - `quick`: Fast model for simple NLP tasks (security identification, title generation, etc.)
- **Dynamic Model Switching**: Support runtime model switching without restarting sessions, maintaining context continuity

#### 2. **TaskTool Intelligent Task Distribution**
Our specially designed `TaskTool` (Architect tool) implements:
- **Subagent Mechanism**: Can launch multiple sub-agents to process tasks in parallel
- **Model Parameter Passing**: Users can specify which model SubAgents should use in their requests
- **Default Model Configuration**: SubAgents use the model configured by the `task` pointer by default

#### 3. **AskExpertModel Expert Consultation Tool**
We specially designed the `AskExpertModel` tool:
- **Expert Model Invocation**: Allows temporarily calling specific expert models to solve difficult problems during conversations
- **Model Isolation Execution**: Expert model responses are processed independently without affecting the main conversation flow
- **Knowledge Integration**: Integrates expert model insights into the current task

#### 🎯 Flexible Model Switching
- **Tab Key Quick Switch**: Press Tab in the input box to quickly switch the model for the current conversation
- **`/model` Command**: Use `/model` command to configure and manage multiple model profiles, set default models for different purposes
- **User Control**: Users can specify specific models for task processing at any time

#### 🔄 Intelligent Work Allocation Strategy

**Architecture Design Phase**
- Use **o3 model** or **GPT-5 model** to explore system architecture and formulate sharp and clear technical solutions
- These models excel in abstract thinking and system design

**Solution Refinement Phase**
- Use **gemini model** to deeply explore production environment design details
- Leverage its deep accumulation in practical engineering and balanced reasoning capabilities

**Code Implementation Phase**
- Use **Qwen Coder model**, **Kimi k2 model**, **GLM-4.5 model**, or **Claude Sonnet 4 model** for specific code writing
- These models have strong performance in code generation, file editing, and engineering implementation
- Support parallel processing of multiple coding tasks through subagents

**Problem Solving**
- When encountering complex problems, consult expert models like **o3 model**, **Claude Opus 4.1 model**, or **Grok 4 model**
- Obtain deep technical insights and innovative solutions

#### 💡 Practical Application Scenarios

```bash
# Example 1: Architecture Design
"Use o3 model to help me design a high-concurrency message queue system architecture"

# Example 2: Multi-Model Collaboration
"First use GPT-5 model to analyze the root cause of this performance issue, then use Claude Sonnet 4 model to write optimization code"

# Example 3: Parallel Task Processing
"Use Qwen Coder model as subagent to refactor these three modules simultaneously"

# Example 4: Expert Consultation
"This memory leak issue is tricky, ask Claude Opus 4.1 model separately for solutions"

# Example 5: Code Review
"Have Kimi k2 model review the code quality of this PR"

# Example 6: Complex Reasoning
"Use Grok 4 model to help me derive the time complexity of this algorithm"

# Example 7: Solution Design
"Have GLM-4.5 model design a microservice decomposition plan"
```

### 🛠️ Key Implementation Mechanisms

#### **Configuration System**
```typescript
// Example of multi-model configuration support
{
  "modelProfiles": {
    "o3": { "provider": "openai", "model": "o3", "apiKey": "..." },
    "claude4": { "provider": "anthropic", "model": "claude-sonnet-4", "apiKey": "..." },
    "qwen": { "provider": "alibaba", "model": "qwen-coder", "apiKey": "..." }
  },
  "modelPointers": {
    "main": "claude4",      // Main conversation model
    "task": "qwen",         // Task execution model
    "reasoning": "o3",      // Reasoning model
    "quick": "glm-4.5"      // Quick response model
  }
}
```

#### **Cost Tracking System**
- **Usage Statistics**: Use `/cost` command to view token usage and costs for each model
- **Multi-Model Cost Comparison**: Track usage costs of different models in real-time
- **History Records**: Save cost data for each session

#### **Context Manager**
- **Context Inheritance**: Maintain conversation continuity when switching models
- **Context Window Adaptation**: Automatically adjust based on different models' context window sizes
- **Session State Preservation**: Ensure information consistency during multi-model collaboration

### 🚀 Advantages of Multi-Model Collaboration

1. **Maximized Efficiency**: Each task is handled by the most suitable model
2. **Cost Optimization**: Use lightweight models for simple tasks, powerful models for complex tasks
3. **Parallel Processing**: Multiple models can work on different subtasks simultaneously
4. **Flexible Switching**: Switch models based on task requirements without restarting sessions
5. **Leveraging Strengths**: Combine advantages of different models for optimal overall results

### 📊 Comparison with Official Implementation

| Feature | Kode | Official Claude |
|---------|------|-----------------|
| Number of Supported Models | Unlimited, configurable for any model | Only supports single Claude model |
| Model Switching | ✅ Tab key quick switch | ❌ Requires session restart |
| Parallel Processing | ✅ Multiple SubAgents work in parallel | ❌ Single-threaded processing |
| Cost Tracking | ✅ Separate statistics for multiple models | ❌ Single model cost |
| Task Model Configuration | ✅ Different default models for different purposes | ❌ Same model for all tasks |
| Expert Consultation | ✅ AskExpertModel tool | ❌ Not supported |

This multi-model collaboration capability makes Kode a true **AI Development Workbench**, not just a single AI assistant.

## Development

Kode is built with modern tools and requires [Bun](https://bun.sh) for development.

### Install Bun

```bash
# macOS/Linux
curl -fsSL https://bun.sh/install | bash
```

### Setup Development Environment

```bash
# Install dependencies
bun install

# Run in development mode
bun run dev
```

### Build

```bash
bun run build
```

### Testing

```bash
# Run tests
bun test

# Test the CLI
./cli.js --help
```
