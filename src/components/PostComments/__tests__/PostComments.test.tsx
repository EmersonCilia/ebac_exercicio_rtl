import {fireEvent, render, screen } from '@testing-library/react';

import PostComment from '..';

import Comment from '../../../models/Comment';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve renderizar corretamente com um comentário e adicionar outro', () => {
    const initialComments = [
      new Comment(0, 'Primeiro comentário')
    ]

    render(<PostComment initialComments={initialComments} />)

    fireEvent.change(screen.getByTestId('post-textarea'), {
      target: {
        value: 'Segundo comentário',
      }
    });

    fireEvent.click(screen.getByTestId('post-button'));

    
    expect(screen.getAllByTestId('post-created')).toHaveLength(2)
  })
});
