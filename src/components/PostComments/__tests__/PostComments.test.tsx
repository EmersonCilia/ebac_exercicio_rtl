import {render, screen } from '@testing-library/react';

import PostComment from '..';

import Comment from '../../../models/Comment';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve renderizar corretamente com 2 comentários', () => {
    const initialComments = [
      new Comment(1, 'Primeiro comentário'),
      new Comment(2, 'Segundo comentário')
    ]

    render(<PostComment initialComments={initialComments} />)
    
    expect(screen.getAllByTestId('post-created')).toHaveLength(2)
  })
});
