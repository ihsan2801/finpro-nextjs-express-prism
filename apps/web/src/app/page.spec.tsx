import Home from '@/app/page';

describe('<Home />', () => {
  it('mounts', () => {
    cy.mount(<Home />);
  });
});

