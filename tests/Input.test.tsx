import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from '../src/react';

describe('Input', () => {
  it('renders with default props', () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter text')).toHaveClass('input');
  });

  it('renders different types', () => {
    const { rerender } = render(<Input type="password" placeholder="Password" />);
    expect(screen.getByPlaceholderText('Password')).toHaveAttribute('type', 'password');

    rerender(<Input type="email" placeholder="Email" />);
    expect(screen.getByPlaceholderText('Email')).toHaveAttribute('type', 'email');
  });

  it('handles value changes', () => {
    const handleChange = vi.fn();
    render(<Input placeholder="Test" onChange={handleChange} />);
    fireEvent.change(screen.getByPlaceholderText('Test'), {
      target: { value: 'hello' },
    });
    expect(handleChange).toHaveBeenCalledWith('hello');
  });

  it('can be disabled', () => {
    render(<Input disabled placeholder="Disabled" />);
    expect(screen.getByPlaceholderText('Disabled')).toBeDisabled();
  });

  it('forwards ref correctly', () => {
    const ref = { current: null as HTMLInputElement | null };
    render(<Input ref={ref} placeholder="Ref Test" />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
