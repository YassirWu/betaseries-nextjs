import { useRouter, NextRouter } from 'next/router';

type Routing = {
  href: (...args) => string;
  redirection: (...args) => void;
};

type GetRouting = {
  homeRouting: Routing;
  popularShowsRouting: Routing;
  detailShowRouting: Routing;
};

function getRouting(router: NextRouter): GetRouting {
  return {
    homeRouting: {
      href: () => '/',
      redirection: () => router.push('/'),
    },
    popularShowsRouting: {
      href: () => '/show/populars',
      redirection: () => router.push('/show/populars'),
    },
    detailShowRouting: {
      href: (id: number) => `/show/${id}`,
      redirection: (id: number) => router.push('/show/[id]', `/show/${id}`),
    },
  };
}

export function useRouterProject(): GetRouting {
  const router = useRouter();

  return getRouting(router);
}
