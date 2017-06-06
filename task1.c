
int main()
{
    int num = 100;
    int a[101];
    for (int i = 0; i <= 101; i++)
    {
        a[i] = i;
    }
    a[1] = 0;
    for (int i = 2; i < sqrt(num); i++)
    {
        for (int j = i + 1; j <= num; j++)
        {
            if (a[j] != 0 && a[j] % i == 0)
            {
                a[j] = 0;
            }
        }
    }
    for (int i = 1, n = 0; i <= 100; i++)
    {
        if (a[i] != 0)
        {
            printf("%d\t", a[i]);
            if (++n % 10 == 0)
            {
                printf("\n");
            }
        }
    }
    printf("\n");
    return 0;
}