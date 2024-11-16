#include<bits/stdc++.h>
using namespace std;

#define N 12

#define INF INT_MAX
int shortestDist(int graph[N][N]) {
int dist[N];
dist[N-1] = 0;

	for (int i = N-2 ; i >= 0 ; i-- )

	{
		dist[i] = INF;

		for (int j = i ; j < N ; j++)
		{
			if (graph[i][j] == INF)
				continue;

			dist[i] = min(dist[i], graph[i][j] +
			              dist[j]);
		}
	}
	return dist[0];
}

int main()

{
	int graph[N][N] =

	{	{INF, 9, 7, 3, 2, INF, INF, INF, INF,INF,INF,INF},
		{INF, INF, INF, INF, INF,4, 2, 1, INF,INF,INF,INF},
		{INF, INF, INF, INF, INF,2, 7, INF, INF,INF,INF,INF},
		{INF, INF, INF, INF, INF,INF, INF, 11, INF,INF,INF,INF},
		{INF, INF, INF, INF, INF,INF, 11, 8, INF,INF,INF,INF},
		{INF, INF, INF, INF, INF,INF, INF,INF, 6,5,INF,INF},
		{INF, INF, INF, INF, INF,INF, INF,INF, 4,3,INF,INF},
		{INF, INF, INF, INF, INF,INF, INF,INF, INF,5,6,INF},
		{INF, INF, INF, INF, INF,INF, INF,INF, INF,INF,INF,4},
		{INF, INF, INF, INF, INF,INF, INF,INF, INF,INF,INF,2},
		{INF, INF, INF, INF, INF,INF, INF,INF, INF,INF,INF,5},
		{INF, INF, INF, INF, INF,INF, INF,INF, INF,INF,INF,0}
	};

	cout << shortestDist(graph);
	return 0;
}
